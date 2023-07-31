
export class AppResponse {
    static json(data: object): Response  {
        return new Response(
            JSON.stringify(data),
            { status: 200}
        );
    }
    static error(message: string = "Server Exception"): Response {
        return new Response(
            message,
            { status: 500 }
        );
    }
}