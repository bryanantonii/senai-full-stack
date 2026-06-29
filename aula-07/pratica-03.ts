let listaProdutos: { nome: string, preco: number, desconto: number }[] = [ 
  { nome: "Teclado", preco: 50, desconto: 5 },
  { nome: "Mouse", preco: 80, desconto: 15 },
  { nome: "Monitor", preco: 120, desconto: 20 }
];

function calcularDesconto(preco: number, desconto: number): number {
  const valorDesconto = preco * (1 - (desconto / 100));
  return preco - valorDesconto;
}


for (let produto of listaProdutos) {
  const precoFinal = calcularDesconto(produto.preco, produto.desconto);
  console.log(`Produto: ${produto.nome}, Preço final com desconto aplicado: R$ ${precoFinal.toFixed(2)}`);
}