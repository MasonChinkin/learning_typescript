"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToDate = void 0;
var stringToDate = function (dateString) {
    // 28/10/2018
    var dateParts = dateString.split('/').map(function (part) {
        return parseInt(part);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.stringToDate = stringToDate;
