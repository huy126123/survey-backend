import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SurveyService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.SurveyCreateInput) {
    return this.prisma.survey.create({ data });
  }

  findAll() {
    return this.prisma.survey.findMany({ include: { creator: true } });
  }

  findOne(id: string) {
    return this.prisma.survey.findUnique({ where: { id }, include: { creator: true } });
  }

  update(id: string, data: Prisma.SurveyUpdateInput) {
    return this.prisma.survey.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.survey.delete({ where: { id } });
  }
}
