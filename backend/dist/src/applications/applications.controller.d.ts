export declare class ApplicationsController {
    create(body: Record<string, unknown>): {
        message: string;
        body: Record<string, unknown>;
    };
    status(id: string): {
        id: string;
        status: string;
    };
    updateStatus(id: string, body: {
        status: string;
    }): {
        id: string;
        status: string;
    };
}
