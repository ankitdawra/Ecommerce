// // import { NestFactory } from '@nestjs/core';
// // import { AppModule } from './app.module';

// // async function bootstrap() {
// //   const app = await NestFactory.create(AppModule);
// //   await app.listen(process.env.PORT ?? 3000);
// // }
// // bootstrap();

// import { NestFactory } from '@nestjs/core';
// import { Transport, MicroserviceOptions } from '@nestjs/microservices';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.createMicroservice<MicroserviceOptions>(
//     AppModule,
//     {
//       transport: Transport.TCP,
//       options: {
//         port: 5001,
//       },
//     },
//   );
//   await app.listen();
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 5001,
    },
  });
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     // transform: true, // Automatically transform payloads to DTO instances
  //     whitelist: true, // Strip properties that are not in the DTO
  //     forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are found
  //     forbidUnknownValues: true, // Disallow unknown values
  //   }),
  // );
  await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 5001);
}
bootstrap();
