export abstract class Produto {

    private _id: number;
    private _nome: string;
    private _preco: number;


    constructor(id: number, nome: string, preco: number) {
        this._id = id
        this._nome = nome
        this._preco = preco
    }

    public exibirDetalhes(): void {
        console.log("Detalhes do produto")
        console.log(`ID: ${this._id}`)
        console.log(`Nome: ${this._nome}`)
        console.log(`Preço: ${this._preco}\n`)
    }
}