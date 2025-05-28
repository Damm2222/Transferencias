import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuariosTricot } from './usuariosTricot.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(UsuariosTricot)
    private repo: Repository<UsuariosTricot>,
  ) {}

  create(usuario: Partial<UsuariosTricot>) {
    const nuevo = this.repo.create(usuario);
    return this.repo.save(nuevo);
  }

  findAll() {
    return this.repo.find();
  }
}
