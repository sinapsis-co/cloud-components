"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunkArray = void 0;
const chunkArray = (elements, maxMessagePerBatch) => {
    const length = elements.length;
    const chucks = [];
    for (let index = 0; index < length; index += maxMessagePerBatch) {
        chucks.push(elements.slice(index, index + maxMessagePerBatch));
    }
    return chucks;
};
exports.chunkArray = chunkArray;
