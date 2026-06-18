let prioridade = 2; // 1 baixa, 2 média, 3 alta
let sistemaForaDoAr = false;
let tempoEsperaMin = 35;
let categoria = "internet"; // login, internet, computador, outro

if (sistemaForaDoAr) {
    console.log("Prioridade máxima: sistema fora do ar.");
} else if (categoria === "login") {
    console.log("Prioridade alta: problema de login.");
} else if (categoria === "internet") {
    if (tempoEsperaMin > 30) {
        console.log("Prioridade alta: problema de internet com espera longa.");
    } else {
        console.log("Prioridade média: problema de internet.");
    }
} else if (categoria === "computador") {
    console.log("Prioridade média: problema de computador.");
} else {
    console.log("Prioridade baixa: outro tipo de problema.");
} 