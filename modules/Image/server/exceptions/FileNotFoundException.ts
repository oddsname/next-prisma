
export class FileNotFoundException extends Error {
    statusCode = 400;
    constructor() {
        super("File does not exist");
    }
}