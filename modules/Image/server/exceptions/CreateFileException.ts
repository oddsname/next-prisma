
export class CreateFileException extends Error {
    statusCode = 500;
    constructor(message: string) {
        super("Not able to create file, Error: " + message);
    }
}