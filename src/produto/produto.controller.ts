import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";

@Controller('/produtos')
export class ProdutoController {

    constructor(private produtoRepository: ProdutoRepository) {}

    @Post()
    criaNovo(@Body() dadosProduto: CriaProdutoDTO) {
        const produtoCadastrado = this.produtoRepository.salva(dadosProduto);
        return produtoCadastrado;
        }

    @Get()
    listaTodos() {
      return this.produtoRepository.listaTodos();
    }

}