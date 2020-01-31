import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loadDataFake } from './core/db/data.fake';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await loadDataFake();

  await app.listen(3000);
}
bootstrap();
