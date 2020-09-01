import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  public sum(a: number, b: number): number {
    return a + b;
  }
}
