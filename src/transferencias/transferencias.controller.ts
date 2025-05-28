import { Controller, Get, Post, Body } from '@nestjs/common';
import { TransferenciasService } from './transferencias.service';
import { Transferencias } from './transferencias.entity';

@Controller('transferencias')
export class TransferenciasController {
  constructor(private readonly transferenciasService: TransferenciasService) {}

  @Post()
  create(@Body() data: Partial<Transferencias>) {
    return this.transferenciasService.crearTransferencia(data);
  }

  @Get()
  findAll(): Promise<Transferencias[]> {
    return this.transferenciasService.findAll();
  }
}
