export interface IFileProvider {
    deleteFileTmp(fileName: string, folderPath: 'campings' | 'posts' | 'announcements'): void
}