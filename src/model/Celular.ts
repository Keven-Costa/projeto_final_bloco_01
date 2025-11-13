import { Produto } from "./Produto"; 

export class Celular extends Produto {

    private _sistemaOperacional: string;
    private _armazenamento: number;      
    private _resolucaoCamera: number;    

    constructor(
        id: number,
        nome: string,
        preco: number,
        sistemaOperacional: string,
        armazenamento: number,
        resolucaoCamera: number
    ) {
        
        super(id, nome, preco);

        
        this._sistemaOperacional = sistemaOperacional;
        this._armazenamento = armazenamento;
        this._resolucaoCamera = resolucaoCamera;
    }


    public get sistemaOperacional(): string {
        return this._sistemaOperacional;
    }

    public get armazenamento(): number {
        return this._armazenamento;
    }

    public get resolucaoCamera(): number {
        return this._resolucaoCamera;
    }


    public set sistemaOperacional(novoSO: string) {
        // Validação: Aceita apenas SOs conhecidos
        const soValidos = ['Android', 'iOS'];
        if (soValidos.includes(novoSO)) {
            this._sistemaOperacional = novoSO;
        } else {
            console.error("Erro: Sistema Operacional deve ser 'Android' ou 'iOS'.");
        }
    }

    public set armazenamento(novoArmazenamento: number) {
        // Validação: Garante que o armazenamento é positivo e um múltiplo comum
        if (novoArmazenamento > 0 && [64, 128, 256, 512, 1024].includes(novoArmazenamento)) {
            this._armazenamento = novoArmazenamento;
        } else {
            console.error("Erro: Armazenamento inválido. Use 64, 128, 256, 512 ou 1024 GB.");
        }
    }

    public set resolucaoCamera(novaResolucao: number) {
        // Validação: Garante que a resolução da câmera é positiva e razoável
        if (novaResolucao >= 5 && novaResolucao <= 200) {
            this._resolucaoCamera = novaResolucao;
        } else {
            console.error("Erro: Resolução da câmera fora do limite (5MP a 200MP).");
        }
    }


    exibirDetalhes(): void {
        super.exibirDetalhes(); 
        console.log(`Especificações do Celular:`);
        console.log(` - S.O.: ${this.sistemaOperacional}`);
        console.log(` - Armazenamento: ${this.armazenamento} GB`);
        console.log(` - Câmera: ${this.resolucaoCamera} MP`);
        console.log('-------------------------------------------');
    }
}