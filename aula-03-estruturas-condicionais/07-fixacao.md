Bug 1:

let idade = 18;
if (idade = 18) {
console.log("Tem 18 anos");
}

let idade = 18;
if (idade === 18) {
console.log("Tem 18 anos");
}

foi usado =, que atribui valor. Para comparar, use ===.

Bug 2:

let dia = 2;
switch (dia) {
case 1:
console.log("Domingo");
case 2:
console.log("Segunda");
default:
console.log("Inválido");
}

let dia = 2;
switch (dia) {
case 1:
console.log("Domingo");
break;
case 2:
console.log("Segunda");
break;
default:
console.log("Inválido");
}

Erro: faltou break nos casos do switch. Sem ele, o código continua executando os próximos
casos.

Bug 3:

let nota = 5;
if (nota >= 6) {
console.log("Aprovado");
} else {
console.log("Aprovado também");
}

let nota = 5;
if (nota >= 6) {
console.log("Aprovado");
} else {
console.log("Reprovado");
}

Erro: o else estava exibindo "Aprovado também", mas quando a nota é menor que 6 a
mensagem correta deve ser de reprovação.