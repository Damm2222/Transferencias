import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Transferencias } from '../transferencias/transferencias.entity';

@Entity({ name: 'usuariostricot' })
export class UsuariosTricot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  rut: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  telefono: string;

  @OneToMany(() => Transferencias, (t) => t.usuarioOrigen)
  transferenciasOrigen: Transferencias[];

  @OneToMany(() => Transferencias, (t) => t.usuarioDestino)
  transferenciasDestino: Transferencias[];

  @Column()
  password: string;

  @Column({
  type: 'numeric',
  precision: 12,
  scale: 2,
  transformer: {
    to: (value: number) => value,
    from: (value: string) => parseFloat(value),
  },
})
saldo: number;
}
