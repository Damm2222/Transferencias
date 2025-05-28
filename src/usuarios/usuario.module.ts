import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosTricot } from './usuariosTricot.entity';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UsuariosTricot])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
