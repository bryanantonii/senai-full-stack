// Constantes
const FRETE_VALOR = 20;
const FRETE_LIMITE = 200;
const DESCONTO_CUPOM_OU_ALUNO = 0.10;
const DESCONTO_PIX = 0.05;
const DESCONTO_BOLETO = 0.02;
let valorCompra = 180;
let temCupom = true;
let ehAlunoSENAI = false;
let formaPagamento = "pix";
let descontoTotal = 0; 

if(valorCompra >= FRETE_LIMITE){
    frete = 0;
}else{
    frete = FRETE_VALOR;
} 

if(temCupom || ehAlunoSENAI){
    descontoTotal += DESCONTO_CUPOM_OU_ALUNO;
} 

if(formaPagamento === "pix"){
    descontoTotal += DESCONTO_PIX;
}else if(formaPagamento === "boleto"){
    descontoTotal += DESCONTO_BOLETO;
} 

valorAposDesconto1 = valorCompra * (1 - descontoTotal);
valorFinal = valorAposDesconto1 + frete;
totalAPagar = valorFinal; 

console.log("Valor da compra: R$ " + valorCompra.toFixed(2));
console.log("Frete: R$ " + frete.toFixed(2));
console.log("Desconto total: " + (descontoTotal * 100).toFixed(2) + "%");
console.log("Valor final a pagar: R$ " + totalAPagar.toFixed(2));