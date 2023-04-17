import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoRepository {
    private dadosProduto = [];

    async salva(produto) {
        this.dadosProduto.push(produto);
        console.log(this.dadosProduto);
    }

    async listaTodos() {
        return this.dadosProduto;
    }
}