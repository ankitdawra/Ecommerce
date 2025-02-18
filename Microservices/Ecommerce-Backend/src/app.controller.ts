import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  UnauthorizedException,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { catchError, throwError } from 'rxjs';
import { UserDTO } from './types/user.type';
import { products } from './dump';

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

  @Get('/')
  healthCheck() {
    return true;
  }

  @Get('/api/hello')
  hello() {
    return 'hello';
  }

  @Get('/api/products')
  getProducts() {
    return this.appService.getProducts();
  }

  @Get('/api/product/:id')
  getProductById(@Param('id') id) {
    return this.appService.getProductById(Number(id));
  }

  @Post('/api/dumpProducts')
  dumpProducts() {
    console.log('Dumping products');
    return this.appService.dumpProducts(products);
  }

  @Get('/api/product/search/:id')
  getRelatedProducts(@Param('id') id) {
    return this.appService.getRelatedProducts(id);
  }

  @Get('/api/product/category/:id')
  getProductsByCategory(@Param('id') id) {
    return this.appService.geProductsByCategory(id);
  }
}
