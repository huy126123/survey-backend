import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Response } from '@prisma/client';

@Injectable()
export class ResponseService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.ResponseCreateInput): Promise<Response> {
    return this.prisma.response.create({
      data,
    });
  }

  async findBySurveyId(surveyId: string): Promise<Response[]> {
    return this.prisma.response.findMany({
      where: { surveyId },
    });
  }

  async findByUserId(userId: string): Promise<Response[]> {
    return this.prisma.response.findMany({
      where: { userId },
    });
  }

  async findOne(id: string): Promise<Response | null> {
    return this.prisma.response.findUnique({
      where: { id },
    });
  }
}
