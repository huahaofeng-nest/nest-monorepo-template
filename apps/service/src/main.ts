import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP } from './app.config';
import { environment } from './app.environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(APP.PORT);
  console.log(`server is listening at ${await app.getUrl()}, env: ${environment}`);
}
bootstrap();
