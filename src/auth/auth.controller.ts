import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
  }

  @Get('google/callback')
@UseGuards(AuthGuard('google'))
async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
  console.log("Google callback hit");
  const user = req.user;
  console.log('User from Google:', req.user);

  const token = this.authService.generateToken(user);
  console.log("Generated token:", token);

  res.redirect(`https://survey-frontend-delta.vercel.app/dashboard?token=${token}`);
}}
