import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioRepository } from './usuario/usuario.repository';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [UsuarioModule, ProdutoModule],
})
export class AppModule {}
