import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/IProdutoRepository";


export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();
    
    id: number = 0;

    buscarPorId(id: number): void {
        let buscarPorId = this.buscarNoArray(id);

        if (buscarPorId != null) {
            buscarPorId.exibirDetalhes();
        } else
            console.log("\nO Produto com ID: " + id
                + " não foi encontrado!");
    }

    listarTodos(): void {
            for (let produto of this.listaProdutos) {
            produto.exibirDetalhes();
        };
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\nO Produto: " + produto.nome +
            " foi criado com sucesso!");
    }

    atualizar(produto: Produto): void {
        let buscarProduto = this.buscarNoArray(produto.id);

        if (buscarProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscarProduto)] = produto;
            console.log("\nO produto: " + produto.nome +
                " foi atualizado com sucesso!");
        } else
            console.log("\nO produto: " + produto.nome +
                " não foi encontrado!");
    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            // Correto: O TypeScript sabe que buscaProduto é um objeto Produto aqui.
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log("\nO produto: " + buscaProduto.nome +
                " foi apagada com sucesso!");
        } else {
            // CORREÇÃO: No bloco 'else', sabemos que buscaProduto é null/undefined.
            // Usamos o 'id' da função para a mensagem de erro.
            console.log(`\n❌ O produto com ID ${id} não foi encontrado para exclusão!`);
        }
    }

        /*Checa se uma produto existe*/
    public buscarNoArray(id: number): Produto | null {

        for (let produto of this.listaProdutos) {
            if (produto.id == id)
                return produto;
        }

        return null;
    }
        public gerarId(): number {
        return ++this.id;
    }
}


    
    // listarTodos(): Produto[];
    // cadastrar(produto: Produto): void;
    // atualizar(produto: Produto): void;
    // deletar(id: number): void; 