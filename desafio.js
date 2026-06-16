let nomeDaPessoa = "Henrique"
let pesoDaPessoa = 70
let alturaDaPessoa = 1.75

let imc = pesoDaPessoa / (alturaDaPessoa * alturaDaPessoa)

if (imc < 18.5){
    console.log("Você está abaixo do peso"); 
    console.log(nomeDaPessoa + " tem um IMC de " + imc.toFixed(2));
} else if (imc >= 18.5 && imc < 25){
    console.log("Você está com o peso normal");
    console.log(nomeDaPessoa + " tem um IMC de " + imc.toFixed(2));
} else if (imc >= 25 && imc < 30){
    console.log("Você está com sobrepeso");
    console.log(nomeDaPessoa + " tem um IMC de " + imc.toFixed(2));
}
