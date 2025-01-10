import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user';
import { TypeOrmModule } from '@nestjs/typeorm';

// TODO:  Add env variables
@Module({
  imports: [
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'user_microservice',
      autoLoadEntities: true,
    }),
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 5001,
        },
      },
    ]),
    // ClientsModule.register([
    //   {
    //     name: 'AUTHENTICATION',
    //     transport: Transport.TCP,
    //     options: {
    //       port: 5001,
    //     },
    //   },
    // ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
