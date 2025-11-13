import { Produto } from "./Produto";

export class Notebook extends Produto {
    processador: string;
    memoriaRam: number; 
    tamanhoTela: number; 

    constructor( id: number, nome: string, preco: number, 
        processador: string, memoriaRam: number, tamanhoTela: number ) {

        super(id, nome, preco);
        
        this.processador = processador;
        this.memoriaRam = memoriaRam;
        this.tamanhoTela = tamanhoTela;
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