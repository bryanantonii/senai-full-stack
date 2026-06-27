// Array de objetos

let alunos = [
{ nome: "João", idade: 20, curso: "Full-Stack" },
{ nome: "Maria", idade: 22, curso: "Full-Stack" },
{ nome: "Pedro ", idade: 19, curso: "Full-Stack" },
{ nome: "Ana", idade: 21, curso: "Full-Stack" },
];


// Percorrendo com for tradicional 

for (let i = 0; i < alunos.length; i++) {
    console.log("Nome: " + alunos[i].nome);
    console.log("Idade: " + alunos[i].idade);
    console.log("Curso: " + alunos[i].curso);
    console.log("-------------------");
}

// Percorrendo com forEawch

alunos.forEach(function(aluno) {
    console.log("Nome: " + aluno.nome);
    console.log("Idade: " + aluno.idade);
    console.log("Curso: " + aluno.curso);
    console.log("-------------------");
});


// Alterando propriedades de um objeto dentro do array

alunos[1].idade = 21;

console.log("Após alteração:");
console.log("Nome: " + alunos[1].nome);
console.log("Idade: " + alunos[1].idade); 