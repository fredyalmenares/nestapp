import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('NestjsApp')
    .setDescription('The NestJsApp')
    .setVersion('1.0')
    .addTag('nestapp')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs/swagger', app, document);
  console.log('PORT: ' + process.env.SERVER_PORT);
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
