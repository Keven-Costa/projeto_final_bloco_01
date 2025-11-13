import readlinesync = require("readline-sync");
import { Notebook } from "./src/model/Notebook";

export function main() {
    let opcao: number

    
    const meuNotebook1 = new Notebook(
        101,                           
        "Notebook Lenovo ",        
        5999.90,                       
        "Intel Core i7 13ª Gen",       
        16,                            
        14                             
    );

        const meuNotebook2 = new Notebook(
        102,                           
        "Notebook Samsung ",        
        4000.00,                       
        "AMD Ryzen 3",       
        32,                            
        18                             
    );

    meuNotebook1.exibirDetalhes()
    meuNotebook2.exibirDetalhes()

     while (true) {

        
        console.log("=====================================================");
        console.log("                                                     ");
        console.log("          KVN E-COMMERCE - MENU            ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ");
        console.log("            1 - Adicionar Novo Produto               ");
        console.log("            2 - Editar/Atualizar Produto             ");
        console.log("            3 - Deletar Produto                      ");
        console.log("            4 - Listar Todos os Produtos             "); 
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {

            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log()
                break;

        }
    }
}

main();