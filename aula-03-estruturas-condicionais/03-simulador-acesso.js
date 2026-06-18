let maiorIdade = 18;
let temCadastro = true;
let temResponsavel = true;
let bloqueado = false;

if (bloqueado) {
    console.log("Acesso negado: usuário bloqueado.");
}

else if (temCadastro && (temResponsavel || maiorIdade >= 18)) {
    console.log("Acesso permitido: usuário cadastrado e atende aos requisitos de idade ou responsabilidade.");
} 
else {
    console.log("Acesso negado: usuário não cadastrado ou não atende aos requisitos.");
} 

