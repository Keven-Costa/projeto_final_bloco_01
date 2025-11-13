import readlinesync = require("readline-sync");
import { Notebook } from "./src/model/Notebook";
import { Celular } from "./src/model/Celular"; 
import { ProdutoController } from "./src/contrller/ProdutoController";

export function main() {
    
    let produtos: ProdutoController = new ProdutoController();

    let opcao: number;
    let nomeProduto: string;
    let precoProduto: number;
    let idProduto: number;
    let tipoProduto: number;
    
    let processador: string;
    let memoriaRam: number;
    let tamanhoTela: number;
    let sistemaOperacional: string;
    let armazenamento: number;
    let resolucaoCamera: number;
    let idEspecifico:number
    
    const tiposProduto = ['Notebook', 'Celular'];


    produtos.cadastrar(new Notebook(
        produtos.gerarId(), 
        "Notebook Lenovo",        
        5999.90,                       
        "Intel Core i7 13ª Gen",       
        16,                            
        14                             
    ));
    produtos.cadastrar(new Celular( 
        produtos.gerarId(),
        "Celular Galaxy S23",
        4500.00,
        "Android",
        256,
        50
    ));

    while (true) {
        
        console.log("=====================================================");
        console.log("          KVN E-COMMERCE - MENU                      ");
        console.log("=====================================================");
        console.log("            1 - Adicionar Novo Produto               ");
        console.log("            2 - Editar/Atualizar Produto             ");
        console.log("            3 - Deletar Produto                      ");
        console.log("            4 - Listar Todos os Produtos             "); 
        console.log("            5 - Listar um produto (pelo ID)             "); 
        console.log("            0 - Sair                                 ");
        console.log("*****************************************************");

        console.log("\nEntre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 0) { 
            console.log("\nObrigado por usar o KVN E-COMMERCE. Até logo!");
            break; 
        }

        switch (opcao) {
            case 1:
                console.log("\n\nOpção 1 - Adicionar Novo Produto");
                
                tipoProduto = readlinesync.keyInSelect(tiposProduto, "Selecione o Tipo do Produto:", { cancel: false }) + 1;
                
                idProduto = produtos.gerarId(); 
                nomeProduto = readlinesync.question("Digite o Nome do Produto: ");
                precoProduto = readlinesync.questionFloat("Digite o Preco do Produto (R$): ");

                switch (tipoProduto) {
                    case 1: 
                        processador = readlinesync.question("Digite o Processador: ");
                        memoriaRam = readlinesync.questionInt("Digite a Memoria RAM (GB): ");
                        tamanhoTela = readlinesync.questionFloat("Digite o Tamanho da Tela (pol): ");
                        
                        produtos.cadastrar(new Notebook(
                            idProduto, nomeProduto, precoProduto,
                            processador, memoriaRam, tamanhoTela
                        ));
                        break;
                    
                    case 2: 
                        sistemaOperacional = readlinesync.question("Digite o Sistema Operacional: ");
                        armazenamento = readlinesync.questionInt("Digite o Armazenamento (GB): ");
                        resolucaoCamera = readlinesync.questionFloat("Digite a Resolucao da Câmera (MP): ");

                        produtos.cadastrar(new Celular(
                            idProduto, nomeProduto, precoProduto,
                            sistemaOperacional, armazenamento, resolucaoCamera
                        ));
                        break;

                    default:
                        console.log("Tipo de Produto inválido.");
                        break;
                }

                break;

            case 2:
                console.log("\n\nOpção 2 - Editar/Atualizar Produto");
                idProduto = readlinesync.questionInt("Digite o ID do Produto a ser atualizado: ");
                
                let produtoBusca = produtos.buscarNoArray(idProduto);

                if (produtoBusca) {
                    nomeProduto = readlinesync.question(`Novo Nome (${produtoBusca.nome}): `);
                    precoProduto = readlinesync.questionFloat(`Novo Preço (R$ ${produtoBusca.preco.toFixed(2)}): `);
                    
                    produtoBusca.nome = nomeProduto;
                    produtoBusca.preco = precoProduto;

                    produtos.atualizar(produtoBusca);
                } else {
                    console.log(`\nProduto com ID ${idProduto} não encontrado para atualização.`);
                }
                
                break;

            case 3:
                console.log("\n\nOpção 3 - Deletar Produto");
                idProduto = readlinesync.questionInt("Digite o ID do Produto a ser deletado: ");
                
                produtos.deletar(idProduto);
                
                break;

            case 4:
                console.log("\n\nOpção 4 - Listar Todos os Produtos");
                produtos.listarTodos();
                break;
            
            case 5:
                console.log("\n\nOpção 5 - Listar um produto específico");
                console.log("Digite o ID do produto específico: ")
                idEspecifico = readlinesync.questionInt()
                produtos.buscarPorId(idEspecifico);
                break;

            default:
                console.log("\nOpção Inválida!");
                break;
        }
    }
}

main();