import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { rut: string, password: string }) {
    const user = await this.authService.validateUser(body.rut, body.password);
    if (!user) throw new UnauthorizedException('Credenciales inválidas');
    return this.authService.login(user);
  }
}