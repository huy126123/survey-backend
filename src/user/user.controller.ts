import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User | null> {
    return this.userService.findById(id);
  }

  @Post()
  async createUser(@Body() userData: { googleId: string; email: string; name: string }) {
    return this.userService.create(userData);
  }
}
