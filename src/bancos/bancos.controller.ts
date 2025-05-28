import { Controller, Post, Get, Body } from '@nestjs/common';
import { BancosService } from './bancos.service';
import { Bancos } from './bancos.entity';

@Controller('bancos')
export class BancosController {
  constructor(private readonly bancosService: BancosService) {}

  @Post()
  create(@Body() data: Partial<Bancos>) {
    return this.bancosService.create(data);
  }

  @Get()
  findAll() {
    return this.bancosService.findAll();
  }
}
