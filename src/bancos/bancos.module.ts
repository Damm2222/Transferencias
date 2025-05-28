import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bancos } from './bancos.entity';
import { BancosService } from './bancos.service';
import { BancosController } from './bancos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Bancos])],
  controllers: [BancosController],
  providers: [BancosService],
})
export class BancosModule {}
