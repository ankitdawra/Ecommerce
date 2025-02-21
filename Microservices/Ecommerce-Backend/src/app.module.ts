import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

// TODO:  Add env variables
@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASS,
      database: 'user_microservice',
      autoLoadEntities: true,
      synchronize: true,
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => {
    //     console.log(process.env.MYSQL_HOST);
    //     return {
    //       type: 'mysql',
    //       host: configService.get<string>('MYSQL_HOST'),
    //       port: configService.get('MYSQL_PORT'),
    //       username: configService.get<string>('MYSQL_USERNAME'),
    //       password: configService.get<string>('MYSQL_PASS'),
    //       database: configService.get<string>('MYSQL_DB'),
    //       autoLoadEntities: true,
    //     };
    //   },
    //   inject: [ConfigService],
    // }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'ecomm-mysql-ecomm-mysql.k.aivencloud.com',
    //   port: 20955,
    //   username: 'avnadmin',
    //   database: 'user_microservice',
    //   autoLoadEntities: true,
    // }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '1234',
    //   database: 'user_microservice',
    //   autoLoadEntities: true,
    // }),
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '0.0.0.0',
          port: 6000,
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
