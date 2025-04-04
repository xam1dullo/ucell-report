import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('save')
  saveMockData() {
    return this.appService.saveMockData();
  }

  @Get('summarized')
  summarized() {
    return this.appService.summarized();
  }

  @Get('remove')
  removeMockData() {
    return this.appService.removeMockData();
  }
}
