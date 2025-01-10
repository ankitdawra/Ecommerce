import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  UnauthorizedException,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { catchError, throwError } from 'rxjs';
import { UserDTO } from './types/user.type';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  // @Post('auth/login')
  // userSignIn(@Body() userDTO: UserDTO) {
  //   return this.appService.userSignIn(userDTO).pipe(
  //     catchError((error) => {
  //       throw new UnauthorizedException(error);
  //     }),
  //   );
  // }

  // @Get('auth/currentUser')
  // getCurrentUser() {
  //   return this.appService.getCurrentUser();
  // }

  @Get('/product')
  getCurrentUser() {
    return this.appService.getProduct();
  }
}
