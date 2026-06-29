function verificarMaiorIdade(idade: number): string{
  if(idade >= 18){
    return "Maior de idade";
  }else{
    return "Menor de idade";
  }
}

console.log(verificarMaiorIdade(20));
console.log(verificarMaiorIdade(16));