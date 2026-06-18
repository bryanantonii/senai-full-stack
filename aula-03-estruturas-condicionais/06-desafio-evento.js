let idade = 18;
let temIngresso = true;
let ehAlunoSENAI = true;
let horaChegada = 18;
let vagasDisponiveis = 5;
let codigoIngresso = "PADRÃO"; // VIP, PADRÃO, CONVIDADO

if(idade < 14){
    console.log("Entrada proibida: idade mínima de 14 anos.");
}else if(!temIngresso){
    console.log("Entrada proibida: ingresso inválido.");
}else{
    console.log("Entrada permitida: ingresso válido.");
}if(vagasDisponiveis <= 0){
    console.log("Entrada proibida: vagas esgotadas.");
}else if(horaChegada > 20){
    console.log("Entrada proibida: horário de chegada após as 20h.");
}else{
    console.log("Entrada permitida: vagas disponíveis e horário adequado.");
}

switch(codigoIngresso){
    case "VIP":
        console.log("Entrada VIP: acesso a áreas exclusivas e brindes.");
        break;
    case "PADRÃO":
        console.log("Entrada padrão: acesso ao evento.");
        break;
    case "CONVIDADO":
        console.log("Entrada convidado: acesso ao evento com restrições.");
        break;
    default: console.log("Código de ingresso inválido.");           
}

if(ehAlunoSENAI && codigoIngresso === "PADRÃO"){
    console.log("Entrada permitida: desconto especial para alunos do SENAI.");
}

console.log("A idade do participante é: "+ idade);
console.log("O ingresso é válido? "+ temIngresso);
