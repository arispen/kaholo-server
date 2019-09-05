import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { IPerson } from './model/person.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async setSomeData(@Body() person: IPerson): Promise<IPerson> {
    return await this.appService.setData(person);
  }
}
