import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.API_PREFIX);
  const config = new DocumentBuilder()
    .setTitle('NestjsApp')
    .setDescription('The NestJsApp')
    .setVersion('1.0')
    .addTag('Nestapp')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(process.env.API_PREFIX + '/docs/swagger', app, document);
  console.log('PORT: ' + process.env.SERVER_PORT);
  console.log('PREFIX: ' + process.env.API_PREFIX);
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
