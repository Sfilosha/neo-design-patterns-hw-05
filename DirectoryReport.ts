export interface DirectoryReport {
    files: number;
    directories: number;
    totalSize: number;
    extensions: Record<string, number>;
} 