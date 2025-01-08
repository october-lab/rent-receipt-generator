interface Window {
    gtag: (
        command: 'event',
        eventName: string,
        eventParameters?: Record<string, string>
    ) => void;
} 