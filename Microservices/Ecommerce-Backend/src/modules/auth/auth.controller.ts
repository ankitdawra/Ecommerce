import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UnauthorizedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/types/user.type';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './guards/auth.guard';

@Controller('api/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() userDTO: UserDTO): Promise<{ access_token: string }> {
    console.log('sigining in');
    try {
      if (!userDTO.email || !userDTO.password) {
        throw new UnauthorizedException();
      }
      const user = await this.authService.findUser(userDTO.email, true);
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }
      const isPasswordMatch = await bcrypt.compare(
        userDTO.password,
        user.password,
      );
      if (!isPasswordMatch) {
        throw new UnauthorizedException('Invalid credentials');
      }
      const payload = { email: user.email };
      return {
        access_token: await this.jwtService.signAsync(payload, {
          secret: process.env.JWT_SECRET,
        }),
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    console.log('getting profile');
    const user = req.user;
    const userInfo = await this.authService.findUser(req.user?.email);
    console.log(user, userInfo);
    return {
      ...user,
      ...userInfo,
    };
  }

  @Post('register')
  async register(@Body() userDTO: UserDTO): Promise<UserDTO> {
    console.log('registering...');
    const hashedPassword = await bcrypt.hash(userDTO.password, 10);
    userDTO.password = hashedPassword;
    return await this.authService.register(userDTO);
  }
}
