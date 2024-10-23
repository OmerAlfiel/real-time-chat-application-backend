import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    register(username: string, password: string): Promise<User>;
    findByUsername(username: string): Promise<User>;
    updateOnlineStatus(userId: number, isOnline: boolean): Promise<void>;
}
