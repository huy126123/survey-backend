import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { Prisma } from '@prisma/client';

@Controller('surveys')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  create(@Body() data: Prisma.SurveyCreateInput) {
    return this.surveyService.create(data);
  }

  @Get()
  findAll() {
    return this.surveyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surveyService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.SurveyUpdateInput) {
    return this.surveyService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surveyService.remove(id);
  }
}
