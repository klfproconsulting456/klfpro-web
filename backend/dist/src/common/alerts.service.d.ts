export declare class AlertsService {
    private readonly logger;
    notifyAdmin(title: string, message: string, severity?: 'INFO' | 'WARNING' | 'CRITICAL'): Promise<void>;
    checkSeoHealth(): Promise<void>;
}
