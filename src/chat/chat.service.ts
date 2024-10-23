import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './message.entity';
import { User } from '../users/user.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  async saveMessage(content: string, sender: User): Promise<Message> {
    const message = this.messageRepository.create({
      content,
      sender,
      createdAt: new Date(),
    });
    return this.messageRepository.save(message);
  }
}
