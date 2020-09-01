import { Get, Injectable } from '@nestjs/common';
import { MathService } from '@libs/math/math.service';

@Injectable()
export class AppService {
  constructor(
    private readonly mathService: MathService
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  @Get('/sum')
  getSum(): number {
    return this.mathService.sum(1, 2);
  }
}
