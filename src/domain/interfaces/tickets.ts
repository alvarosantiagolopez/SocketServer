

export interface Ticket {
    id: string;
    number: number;
    creatAt: Date;
    handleAtDesk?: string;
    handleAt?: Date;
    done: boolean;
}