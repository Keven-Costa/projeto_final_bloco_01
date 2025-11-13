export abstract class Produto {

    private _id: number;
    private _nome: string;
    private _preco: number;


    constructor(id: number, nome: string, preco: number) {
        this._id = id
        this._nome = nome
        this._preco = preco
    }

    public get id(): number {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    public get preco(): number {
        return parseFloat(this._preco.toFixed(2));
    }

    public set nome(novoNome: string) {
        if (novoNome && novoNome.trim() !== '') {
            this._nome = novoNome;
        } else {
            console.error("Erro: O nome do produto não pode ser vazio.");
        }
    }

    public set preco(novoPreco: number) {
        if (novoPreco > 0) {
            this._preco = novoPreco;
        } else {
            console.error("Erro: O preço deve ser um valor positivo.");
        }
    }


    public exibirDetalhes(): void {
        console.log("Detalhes do produto")
        console.log(`ID: ${this._id}`)
        console.log(`Nome: ${this._nome}`)
        console.log(`Preço: ${this._preco}\n`)
    }
}