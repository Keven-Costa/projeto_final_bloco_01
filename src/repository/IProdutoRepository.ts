import { Produto } from '../model/Produto'; 

export interface ProdutoRepository {

    buscarPorId(id: number): Produto | undefined;
    listarTodos(): Produto[];
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;    
}
