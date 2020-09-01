import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MathService } from '@libs/math/math.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mathService: MathService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/sum')
  getSum(): number {
    return this.mathService.sum(1, 2);
  }
}
