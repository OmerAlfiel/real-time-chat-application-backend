import { User } from '../users/user.entity';
export declare class Message {
    id: number;
    sender: User;
    content: string;
    createdAt: Date;
}
