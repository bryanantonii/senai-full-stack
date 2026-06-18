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
let desconto1 = 0;
let desconto2 = 0;
let descontoTotal = desconto1 + desconto2;
let valorFinal = valorCompra - descontoTotal;
let frete = valorFinal >= FRETE_LIMITE ? 0 : FRETE_VALOR;
let totalAPagar = valorFinal + frete;
let valorAposDesconto1 = valorCompra - desconto1;


if (temCupom || ehAlunoSENAI) {
    desconto1 = valorCompra * DESCONTO_CUPOM_OU_ALUNO;
}


switch (formaPagamento) {
    case "pix":
        desconto2 = valorAposDesconto1 * DESCONTO_PIX;
        break;
    case "boleto":
        desconto2 = valorAposDesconto1 * DESCONTO_BOLETO;
        break;
    case "credito":
        desconto2 = 0;
        break;
    default:
        console.log("Forma de pagamento inválida.");
        process.exit(1);
}


console.log("Valor original: R$ " + valorCompra.toFixed(2));
console.log("Desconto aplicado: R$ " + descontoTotal.toFixed(2));
console.log("Frete: R$ " + frete.toFixed(2));
console.log("Total a pagar: R$ " + totalAPagar.toFixed(2));