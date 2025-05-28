import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Transferencias } from '../transferencias/transferencias.entity';

@Entity({ name: 'bancos' })
export class Bancos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Transferencias, (t) => t.bancoOrigen)
  transferenciasOrigen: Transferencias[];

  @OneToMany(() => Transferencias, (t) => t.bancoDestino)
  transferenciasDestino: Transferencias[];
}
