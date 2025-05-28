import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UsuariosTricot } from '../usuarios/usuariosTricot.entity';
import { Bancos } from '../bancos/bancos.entity';

@Entity({ name: 'transferencias' })
export class Transferencias {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  monto: number;

  @Column({ name: 'nro_cuenta' })
  nroCuenta: number;

  @ManyToOne(() => UsuariosTricot)
  @JoinColumn({ name: 'usuario_origen_id' })
  usuarioOrigen: UsuariosTricot;

  @ManyToOne(() => UsuariosTricot)
  @JoinColumn({ name: 'usuario_destino_id' })
  usuarioDestino: UsuariosTricot;

  @ManyToOne(() => Bancos)
  @JoinColumn({ name: 'banco_origen_id' })
  bancoOrigen: Bancos;

  @ManyToOne(() => Bancos)
  @JoinColumn({ name: 'banco_destino_id' })
  bancoDestino: Bancos;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;
}
