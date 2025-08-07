import { ReportAdapter } from "./ReportAdapter";
import { DirectoryReport } from "./DirectoryReport";

export class JsonReportAdapter implements ReportAdapter {
  export(report: DirectoryReport): string {
    return JSON.stringify(report, null, 2);
  }
}
