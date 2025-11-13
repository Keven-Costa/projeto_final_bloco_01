import { Produto } from "./Produto";

export class Notebook extends Produto {
    private _processador: string;
    private _memoriaRam: number; 
    private _tamanhoTela: number; 

    constructor( id: number, nome: string, preco: number, 
        processador: string, memoriaRam: number, tamanhoTela: number ) {

        super(id, nome, preco);
        
        this._processador = processador;
        this._memoriaRam = memoriaRam;
        this._tamanhoTela = tamanhoTela;
    }

    public get processador(): string {
        return this._processador;
    }

    public get memoriaRam(): number {
        return this._memoriaRam;
    }

    public get tamanhoTela(): number {
        return this._tamanhoTela;
    }

    public set processador(novoProcessador: string) {
        // Validação simples: Garante que o processador não está vazio
        if (novoProcessador && novoProcessador.length > 3) {
            this._processador = novoProcessador;
        } else {
            console.error("Erro: O processador deve ter no mínimo 4 caracteres.");
        }
    }

    public set memoriaRam(novaRam: number) {
        // Validação: Garante que a RAM é um valor positivo e um múltiplo de 4
        if (novaRam > 0 && novaRam % 4 === 0) {
            this._memoriaRam = novaRam;
        } else {
            console.error("Erro: Memória RAM deve ser um valor positivo e múltiplo de 4 (ex: 8, 16, 32).");
        }
    }

    public set tamanhoTela(novoTamanho: number) {
        // Validação: Garante que o tamanho da tela está dentro de um limite razoável (10 a 20 polegadas)
        if (novoTamanho >= 10 && novoTamanho <= 20) {
            this._tamanhoTela = novoTamanho;
        } else {
            console.error("Erro: Tamanho da tela deve estar entre 10 e 20 polegadas.");
        }
    }

    exibirDetalhes(): void {
        super.exibirDetalhes();
        console.log(`Especificações:`);
        console.log(` - Processador: ${this.processador}`);
        console.log(` - RAM: ${this.memoriaRam} GB`);
        console.log(` - Tela: ${this.tamanhoTela} polegadas`);
        console.log('-------------------------------------------');
    }
}