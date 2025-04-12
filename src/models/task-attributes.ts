export interface TaskAttributes {
    id: number;
    title: string;
    description?: string;
    status: 'en cours' | 'terminée';
    due_date?: Date;
    user_id?: number;
} 