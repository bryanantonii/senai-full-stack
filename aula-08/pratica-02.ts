let produto: { nome: string; preco: number; estoque: number } = {
    nome: "Notebook",
    preco: 2500,
    estoque: 2,     
}

function calcularTotal(produto: { nome: string; preco: number; estoque: number }, quantidade: number): number { 
    return produto.preco * quantidade;
}

console.log(`O total é: R$ ${calcularTotal(produto, 2)}`);