import readlinesync = require("readline-sync");

export function main() {
    let opcao: number

     while (true) {

        
        console.log("=====================================================");
        console.log("                                                     ");
        console.log("          KVN E-COMMERCE - MENU PRINCIPAL           ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ");
        console.log("            1 - Navegar por Categorias               ");
        console.log("            2 - Buscar Produto (por nome ou palavra-chave) ");
        console.log("            3 - Visualizar Carrinho ([X] itens)      ");
        console.log("            4 - Finalizar Compra                     ");
        console.log("            5 - Sair                                 ");
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



                
                break;

        }
    }
}

main();