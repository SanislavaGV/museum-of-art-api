import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("new-controller")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("test")
  getTest(): string {
    return "This is test!!!!";
  }
}
