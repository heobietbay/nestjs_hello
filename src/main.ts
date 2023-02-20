import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      // trip validated object of any properties that do not have any decorators
      whitelist: true,
    }
  ));
  await app.listen(3000);
}
bootstrap();
