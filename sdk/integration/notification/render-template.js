"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderEmailTemplate = void 0;
const error_1 = require("error");
const html_minifier_terser_1 = require("html-minifier-terser");
const mustache_1 = __importDefault(require("mustache"));
const object_1 = require("../bucket/object");
const renderEmailTemplate = async (bucketName, attributes) => {
    const [subjectTemplate, bodyTemplate] = await Promise.all([
        fetchTemplate(bucketName, 'email', attributes.templateName, 'subject', 'txt'),
        fetchTemplate(bucketName, 'email', attributes.templateName, 'body', 'html'),
    ]);
    let payload = attributes.payload;
    if (attributes.payload['language']) {
        const translation = await fetchTemplate(bucketName, 'email', attributes.templateName, 'body', 'json');
        const language = Object.keys(JSON.parse(translation)[attributes.payload['language']]).length
            ? attributes.payload['language']
            : attributes.payload['defaultLanguage'];
        payload = JSON.parse(mustache_1.default.render(translation, attributes.payload))[language];
    }
    const subject = mustache_1.default.render(subjectTemplate, { ...payload, ...attributes.payload });
    const body = await (0, html_minifier_terser_1.minify)(mustache_1.default.render(bodyTemplate, { ...payload, ...attributes.payload }));
    return { subject, body };
};
exports.renderEmailTemplate = renderEmailTemplate;
const fetchTemplate = async (bucket, via, templateName, fragment, extension) => {
    const { Body } = await (0, object_1.bucketGetObject)({
        Bucket: bucket,
        Key: `${templateName}/${via}/${fragment}.${extension}`,
    });
    if (!Body)
        throw new error_1.PlatformFault({ code: 'FAULT_NOT_MISSING_TEMPLATE', detail: templateName });
    return Body;
};
