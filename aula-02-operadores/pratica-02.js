let nota1 = 7.5;
let nota2 = 8.0;
let nota3 = 6.0;

let media = (nota1 + nota2 + nota3) / 3;

if(media >= 6){
    console.log("Aprovado! Média: " + media.toFixed(2));
}else{
    console.log("Reprovado! Média: " + media.toFixed(2));
}