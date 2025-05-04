import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ResponseService } from './response.service';
import { Prisma } from '@prisma/client';

@Controller('responses')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @Post()
  create(@Body() createResponseDto: Prisma.ResponseCreateInput) {
    return this.responseService.create(createResponseDto);
  }

  @Get('survey/:surveyId')
  findBySurveyId(@Param('surveyId') surveyId: string) {
    return this.responseService.findBySurveyId(surveyId);
  }

  @Get('user/:userId')
  findByUserId(@Param('userId') userId: string) {
    return this.responseService.findByUserId(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responseService.findOne(id);
  }
}
