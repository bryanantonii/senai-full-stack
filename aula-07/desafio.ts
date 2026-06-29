
// Lista de alunos com suas notas 
let alunos: { nome: string, nota1: number, nota2: number, nota3: number }[] = [ 
  { nome: "João", nota1: 8, nota2: 6, nota3: 7 }, 
  { nome: "Maria", nota1: 4, nota2: 5, nota3: 6 },
  { nome: "Pedro", nota1: 9, nota2: 8, nota3: 10 }
];

// Função para calcular a media do aluno
function calcularMedia(nota1: number, nota2: number, nota3: number): number { 
    return (nota1 + nota2 + nota3) / 3; 
}

// Função para verificar a Situação do aluno com base na média
function verificarSituacao(media: number): string {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
    }

// Função para exibir o boletim do aluno
function exibirBoletin (aluno: {nome: string, nota1: number, nota2: number, nota3: number}): void {
    const media = calcularMedia(aluno.nota1, aluno.nota2, aluno.nota3);
    const situacao = verificarSituacao(media);
    console.log(`Aluno: ${aluno.nome}, Média: ${media.toFixed(2)}, Situação: ${situacao}`);
}

// Usando a função 
console.log("Boletim dos alunos:");
for (let aluno of alunos) {
    exibirBoletin(aluno);
}