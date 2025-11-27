import { Body, Controller, Get, Post } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { CreateSeedDto } from '@/types';

@Controller('seeds')
export class SeedsController {
  constructor(private readonly seedsService: SeedsService) {}

  @Get()
  findAll() {
    return this.seedsService.findAll();
  }

  @Post()
  create(@Body() createSeedDto: CreateSeedDto) {
    return this.seedsService.create(createSeedDto);
  }
}
