import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { Message } from './message.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Message])],
    providers: [ChatService, ChatGateway],
})
export class ChatModule {}
