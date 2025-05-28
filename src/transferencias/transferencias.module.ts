import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transferencias } from './transferencias.entity';
import { TransferenciasService } from './transferencias.service';
import { TransferenciasController } from './transferencias.controller';
import { UsuariosTricot } from '../usuarios/usuariosTricot.entity';
import { Bancos } from '../bancos/bancos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transferencias, UsuariosTricot, Bancos])],
  controllers: [TransferenciasController],
  providers: [TransferenciasService],
})
export class TransferenciasModule {}
