export interface IStorageProvider {
    uploadFile(fileName: string, pathFolder: string, folderStorage: 'posts' | 'announcements' | 'campings' | 'boxes' | 'uploads'): Promise<string | undefined>;
    deleteFile(fileName: string, folderStorage: 'posts' | 'announcements' | 'campings' | 'boxes' | 'uploads'): Promise<void>
}
