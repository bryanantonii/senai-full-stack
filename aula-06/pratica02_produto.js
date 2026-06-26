
let produto = {
    nome: "Notebook",
    preco: 2500.00,
    quantidade: 10,
    disponivel: true
};

// Acessando Propriedades do objeto
console.log("Nome do produto: " + produto.nome);
console.log("Preço do produto: R$" + produto.preco.toFixed(2));
console.log("Quantidade em estoque: " + produto.quantidade);
console.log("Disponível: " + produto.disponivel);           

// Alterando Propriedades do objeto
produto.preco = 2300.00;
produto.quantidade = 15;
produto.disponivel = false;

console.log("\nApós alterações:");
console.log("Preço do produto: R$" + produto.preco.toFixed(2));
console.log("Quantidade em estoque: " + produto.quantidade);
console.log("Disponível: " + produto.disponivel);