import { Controller, Get, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Simple greets',
  })
  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
