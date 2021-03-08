import { OutPutTarget } from '../Summary'

export class ConsoleReports implements OutPutTarget {
  print(report: string): void {
    console.log(report)
  }
}
