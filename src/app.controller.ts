import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller('/post') // 'post'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
