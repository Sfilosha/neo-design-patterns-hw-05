import { ReportAdapter } from "./ReportAdapter";
import { DirectoryReport } from "./DirectoryReport";

export class CsvReportAdapter implements ReportAdapter {
  export(report: DirectoryReport): string {
    const lines: string[] = [];

    lines.push('Metric,Value');
    lines.push(`Total Files,${report.files}`);
    lines.push(`Total Directories,${report.directories}`);
    lines.push(`Total Size (bytes),${report.totalSize}`);
    lines.push('');
    lines.push('Extension,Count');

    for (const [ext, count] of Object.entries(report.extensions)) {
      lines.push(`${ext},${count}`);
    }

    return lines.join('\n');
  }
}
