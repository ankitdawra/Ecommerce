import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Post,
  UnauthorizedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/types/user.type';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() userDTO: UserDTO): Promise<{ access_token: string }> {
    Logger.log('hey');
    Logger.log(userDTO);
    if (!userDTO.email || !userDTO.password) {
      throw new UnauthorizedException();
    }
    const user = await this.authService.findUser(userDTO.email);
    if (user?.password !== userDTO.password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    console.log('inside controller', req);
    const user = req.user;
    const userInfo = await this.authService.findUser(req.user?.email);
    return {
      ...user,
      ...userInfo,
    };
  }
}
