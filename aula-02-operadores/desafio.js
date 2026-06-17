let nome = "João";
let nota1 = 8.5;
let nota2 = 7.5;
let frequencia = 80;
let atividadesEntregues = true;
let estaBloqueado = false;
let media = (nota1 + nota2) / 2;
let situacaoFinal;

let nome2 = "Joana";
let notaJoana1 = 2.5;
let notaJoana2 = 6.5;
let frequenciaJoana = 75;
let atividadesEntreguesJoana = false;
let estaBloqueadoJoana = false;
let mediaJoana = (notaJoana1 + notaJoana2) / 2;
let situacaoFinalJoana;

let nome3 = "Jorge";
let notaJorge1 = 8.5;
let notaJorge2 = 8.5;
let frequenciaJorge = 70;
let atividadesEntreguesJorge = true;
let estaBloqueadoJorge = false;
let mediaJorge = (notaJorge1 + notaJorge2) / 2;
let situacaoFinalJorge;

if (estaBloqueado) {
    situacaoFinal = "Reprovado";
} else if (media >= 9 && frequencia >= 60) {
    situacaoFinal = "Aprovado por destaque";
} else if (media >= 6 && frequencia >= 75 && atividadesEntregues) {
    situacaoFinal = "Aprovado";
} else {
    situacaoFinal = "Reprovado";
}

if (estaBloqueadoJoana) {
    situacaoFinalJoana = "Reprovado";
} else if (mediaJoana >= 9 && frequenciaJoana >= 60) {
    situacaoFinalJoana = "Aprovado por destaque";
} else if (mediaJoana >= 6 && frequenciaJoana >= 75 && atividadesEntreguesJoana) {
    situacaoFinalJoana = "Aprovado";
} else {
    situacaoFinalJoana = "Reprovado";
}

if (estaBloqueadoJorge) {
    situacaoFinalJorge = "Reprovado";
} else if (mediaJorge >= 9 && frequenciaJorge >= 60) {
    situacaoFinalJorge = "Aprovado por destaque";
} else if (mediaJorge >= 6 && frequenciaJorge >= 75 && atividadesEntreguesJorge) {
    situacaoFinalJorge = "Aprovado";
} else {
    situacaoFinalJorge = "Reprovado";
}

console.log("--- Situação Final do Aluno 1 ---");
console.log("Nome: " + nome);
console.log("Média: " + media.toFixed(2));
console.log("Frequência: " + frequencia + "%");
console.log("Atividades Entregues: " + (atividadesEntregues ? "Sim" : "Não"));
console.log("Situação Final: " + situacaoFinal);

console.log("--- Situação Final do Aluno 2---");
console.log("Nome: " + nome2);
console.log("Média: " + mediaJoana.toFixed(2));
console.log("Frequência: " + frequenciaJoana + "%");
console.log("Atividades Entregues: " + (atividadesEntreguesJoana ? "Sim" : "Não"));
console.log("Situação Final: " + situacaoFinalJoana);

console.log("--- Situação Final do Aluno 3 ---");
console.log("Nome: " + nome3);
console.log("Média: " + mediaJorge.toFixed(2));
console.log("Frequência: " + frequenciaJorge + "%");
console.log("Atividades Entregues: " + (atividadesEntreguesJorge ? "Sim" : "Não"));
console.log("Situação Final: " + situacaoFinalJorge);