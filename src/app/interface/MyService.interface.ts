export abstract class MyService {
    abstract id: number;
    abstract name: string;
    abstract isActive: boolean;
    abstract getDetails(): string;
    
    abstract saveDetails(id: number,name: string): void;
    }