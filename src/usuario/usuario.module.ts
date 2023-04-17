import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { ProdutoController } from "src/produtos/produto.controller";
import { ProdutoRepository } from "src/produtos/produto.repository";

@Module({
    controllers: 
    [
        UsuarioController,
        ProdutoController
    ],
    providers: 
    [
        UsuarioRepository,
        ProdutoRepository
    ]
})

export class UsuarioModule {}