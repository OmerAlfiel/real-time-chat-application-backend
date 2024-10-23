import { Controller, Get } from '@nestjs/common';

@Controller()
export class HomeController {
  @Get()
  getHome(): string {
    return 'Welcome to the Chat Application!';
  }
}
