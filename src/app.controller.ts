import { Controller, Get, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Greetings')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Greeting in english',
  })
  @ApiOperation({ summary: 'Simple english greet' })
  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
