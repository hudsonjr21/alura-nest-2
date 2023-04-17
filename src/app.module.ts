import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioRepository } from './usuario/usuario.repository';

@Module({
  imports: [UsuarioModule],
})
export class AppModule {}
