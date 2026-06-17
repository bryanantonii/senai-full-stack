let clienteEstudante = true;
let clientecomCupom = true;
let clientesemCupom = false;
let ClienteNaoEstudante = false;


if(clienteEstudante || clientecomCupom || clientesemCupom || ClienteNaoEstudante){
    console.log("Desconto aplicado!");
} else {
    console.log("Desconto não aplicado!");
}