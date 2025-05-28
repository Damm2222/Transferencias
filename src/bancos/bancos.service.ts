import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bancos } from './bancos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BancosService {
  constructor(@InjectRepository(Bancos) private repo: Repository<Bancos>) {}

  create(data: Partial<Bancos>) {
    return this.repo.save(this.repo.create(data));
  }

  findAll() {
    return this.repo.find();
  }
}
