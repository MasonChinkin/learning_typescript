"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var ConsoleReports_1 = require("./reportTargets/ConsoleReports");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outPutTarget) {
        this.analyzer = analyzer;
        this.outPutTarget = outPutTarget;
    }
    Summary.winsAnalysisToConsole = function (teamName) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new ConsoleReports_1.ConsoleReports());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outPutTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
