import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config();
  const config = new DocumentBuilder()
  .addBearerAuth({
    type:"http",
    scheme:'bearer',
    bearerFormat:'JWT',

    } ,'access-token')
    .setTitle('Vehicle API')
    .setDescription('The Vehicle API documentation')
    .setVersion('1.0')
    .addTag('vehicle')
    .build();
  app.use(helmet());
  app.enableCors();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(9001);
}
bootstrap();
