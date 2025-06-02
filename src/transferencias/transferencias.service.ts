import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transferencias } from './transferencias.entity';
import { Bancos } from '../bancos/bancos.entity';
import { UsuariosTricot } from '../usuarios/usuariosTricot.entity';
@Injectable()
export class TransferenciasService {
  constructor(
    @InjectRepository(Transferencias)
    private transferenciasRepo: Repository<Transferencias>,

    @InjectRepository(UsuariosTricot)
    private usuariosRepo: Repository<UsuariosTricot>,

    @InjectRepository(Bancos)
    private bancosRepo: Repository<Bancos>,
  ) {}

  async crearTransferencia(data: any): Promise<Transferencias> {
    const {
      monto,
      nroCuenta,
      usuarioOrigen,
      usuarioDestino,
      bancoOrigen,
      bancoDestino,
    } = data;

    // Validar existencia de usuarios y bancos
    const origen = await this.usuariosRepo.findOneBy({ id: usuarioOrigen.id });
    if (!origen)
      throw new NotFoundException(
        `Usuario origen ID ${usuarioOrigen.id} no existe`,
      );

    const destino = await this.usuariosRepo.findOneBy({
      id: usuarioDestino.id,
    });
    if (!destino)
      throw new NotFoundException(
        `Usuario destino ID ${usuarioDestino.id} no existe`,
      );

    const bancoO = await this.bancosRepo.findOneBy({ id: bancoOrigen.id });
    if (!bancoO)
      throw new NotFoundException(
        `Banco origen ID ${bancoOrigen.id} no existe`,
      );

    const bancoD = await this.bancosRepo.findOneBy({ id: bancoDestino.id });
    if (!bancoD)
      throw new NotFoundException(
        `Banco destino ID ${bancoDestino.id} no existe`,
      );

    // Validar saldo suficiente
    if (origen.saldo < monto) {
      throw new Error(
        `El usuario origen no tiene saldo suficiente para transferir. Saldo actual: ${origen.saldo}`,
      );
    }

    // Actualizar saldos (asegura que sean números)
    origen.saldo = Number(origen.saldo);
    destino.saldo = Number(destino.saldo);
    const montoNum = Number(monto);
    origen.saldo -= montoNum;
    destino.saldo += montoNum;
    await this.usuariosRepo.save(origen);
    await this.usuariosRepo.save(destino);

    // Crear transferencia con entidades relacionadas
    const nueva = this.transferenciasRepo.create({
      monto,
      nroCuenta,
      usuarioOrigen: origen,
      usuarioDestino: destino,
      bancoOrigen: bancoO,
      bancoDestino: bancoD,
    });

    return this.transferenciasRepo.save(nueva);
  }
  async findAll(): Promise<Transferencias[]> {
    return this.transferenciasRepo.find({
      relations: [
        'usuarioOrigen',
        'usuarioDestino',
        'bancoOrigen',
        'bancoDestino',
      ],
    });
  }
}
