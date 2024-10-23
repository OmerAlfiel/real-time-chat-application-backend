import { Repository } from 'typeorm';
import { Message } from './message.entity';
import { User } from '../users/user.entity';
export declare class ChatService {
    private messageRepository;
    constructor(messageRepository: Repository<Message>);
    saveMessage(content: string, sender: User): Promise<Message>;
}
