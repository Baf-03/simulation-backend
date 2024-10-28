import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Replace with your frontend origin
    credentials: true,               // If you need to send cookies
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
  });
  await app.listen(3000);
}
bootstrap();
