export class ImageApi {
    static async createFile(file: File): Promise<{
        url: string,
        id: number,
    }> {
        const formData = new FormData();

        formData.set('file', file);

        const response = await fetch('/api/image/upload', {
            method: "POST",
            body: formData,
        });

        return response.json();
    }

    static async deleteFile(id: number): Promise<{ success: boolean }> {
        const response = await fetch('/api/image/delete', {
            method: "POST",
            body: JSON.stringify({id}),
        });

        return response.json()
    }
}