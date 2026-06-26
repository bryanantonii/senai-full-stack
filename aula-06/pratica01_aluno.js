let aluno = {
    nome: "João",
    idade: 20,
    curso: "Full-Stack",
    matriculado: true,
    notaFinal: 8.5
};

// Acessando Propriedades do objeto
console.log("Nome do aluno: " + aluno.nome);
console.log("Idade do aluno: " + aluno.idade);
console.log("Curso do aluno: " + aluno.curso);
console.log("Matriculado: " + aluno.matriculado);
console.log("Nota final: " + aluno.notaFinal);

// Alterando Propriedades do objeto
aluno.idade = 21;
aluno.notaFinal = 9.0;
aluno.matriculado = false;

console.log("\nApós alterações:");
console.log("Idade do aluno: " + aluno.idade);
console.log("Nota final: " + aluno.notaFinal);
console.log("Matriculado: " + aluno.matriculado);
