import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { ProdutoController } from "src/produto/produto.controller";
import { ProdutoRepository } from "src/produto/produto.repository";
import { EmailUnicoValitador } from "./validacao/email-unico.validator";

@Module({
    controllers: 
    [
        UsuarioController,
        ProdutoController
    ],
    providers: 
    [
        UsuarioRepository,
        ProdutoRepository,
        EmailUnicoValitador
    ]
})

export class UsuarioModule {}