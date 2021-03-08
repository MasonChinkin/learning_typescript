import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { MatchData } from './MatchData'
import { ConsoleReports } from './reportTargets/ConsoleReports'

export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutPutTarget {
  print(report: string): void
}

export class Summary {
  static winsAnalysisToConsole(teamName: string) {
    return new Summary(new WinsAnalysis(teamName), new ConsoleReports())
  }

  constructor(public analyzer: Analyzer, public outPutTarget: OutPutTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches)
    this.outPutTarget.print(output)
  }
}
