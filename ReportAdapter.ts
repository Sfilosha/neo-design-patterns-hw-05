import { DirectoryReport } from './DirectoryReport';

export interface ReportAdapter {
    export(report: DirectoryReport): string;
} 