import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";

@Controller('/produtos')
export class ProdutoController {

    constructor(private produtoRepository: ProdutoRepository) {}

    @Post()
    async criaproduto (@Body() dadosDoProduto) {
        this.produtoRepository.salvar(dadosDoProduto);
        return dadosDoProduto;
    }

    @Get()
    async listUsuarios() {
        return this.produtoRepository.listar();
    }

}