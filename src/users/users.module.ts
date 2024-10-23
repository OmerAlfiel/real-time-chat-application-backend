import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './user.entity'; // Import your entity

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Register your entity
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
