import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuario.module';
import { BancosModule } from './bancos/bancos.module';
import { TransferenciasModule } from './transferencias/transferencias.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'clarita123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: false,
    }),
    UsuariosModule,       // ✅ Reemplaza UsuariosTricot por esto
    BancosModule,
    TransferenciasModule,
  ],
})
export class AppModule {}
