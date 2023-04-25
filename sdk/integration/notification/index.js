"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliverEmail = exports.ses = void 0;
const client_sesv2_1 = require("@aws-sdk/client-sesv2");
const nodemailer_1 = require("nodemailer");
const tracing_1 = require("tracing");
exports.ses = tracing_1.Tracing.captureIntegration(new client_sesv2_1.SESv2Client({}));
class SendRawEmailCommand extends client_sesv2_1.SendEmailCommand {
    constructor(params) {
        const input = {
            Content: { Raw: { Data: params.RawMessage.Data } },
            FromEmailAddress: params.Source,
            Destination: { ToAddresses: params.Destinations },
        };
        super(input);
    }
}
const deliverEmail = async (params, tracingMeta) => {
    const cmd = async () => {
        const transporter = (0, nodemailer_1.createTransport)({ SES: { ses: exports.ses, aws: { SendRawEmailCommand: SendRawEmailCommand } } });
        await transporter.sendMail(params);
    };
    return tracing_1.Tracing.capture('SendEmail', 'FAULT_NOT_DELIVER_EMAIL', params.to, cmd, tracingMeta);
};
exports.deliverEmail = deliverEmail;
