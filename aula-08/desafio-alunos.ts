class aluno {
    nome: string;
    nota1: number;
    nota2: number;
    
    constructor(nome: string, nota1: number, nota2: number) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    calcularMedia(): number {
        return (this.nota1 + this.nota2) / 2;
    }

    verificarSituacao(): string {
        const media = this.calcularMedia();
        if (media >= 7) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }

    exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Nota 1: ${this.nota1}`);
        console.log(`Nota 2: ${this.nota2}`);
        console.log(`Média: ${this.calcularMedia()}`);
        console.log(`Situação: ${this.verificarSituacao()}`);
    }
 }

let aluno1 = new aluno("Bryan", 8, 6);
let aluno2 = new aluno("Henrique", 7, 9);
let aluno3 = new aluno("Lucas", 5, 4);

aluno1.exibirInformacoes();
aluno2.exibirInformacoes();
aluno3.exibirInformacoes();