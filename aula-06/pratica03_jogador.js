let jogador = {
nickname: "Nayrb0",
nivel: 67,
moedas: 1.500,
energia: 85,
premium: false

};

console.log("===== Status Inicial =====");
console.log("Nickname do jogador: " + jogador.nickname);
console.log("Nivel do jogador: " + jogador.nivel);
console.log("Moedas do Jogador: " + jogador.moedas);
console.log("Energia do Jogador: "+ jogador.energia);
console.log("Premium: "+ jogador.premium);

jogador.nivel = 68;
jogador.moedas = 1.750;
jogador.energia = 100;
jogador.premium = true;

console.log("===== Status Final =====");
console.log("Nickname do jogador: " + jogador.nickname);
console.log("Nivel do jogador: " + jogador.nivel);
console.log("Moedas do Jogador: " + jogador.moedas);
console.log("Energia do Jogador: "+ jogador.energia);
console.log("Premium: "+ jogador.premium);  