let alunos = ["João", "Maria", "Pedro", "Ana", "Lucas"];
let notasAlunos = [10, 6, 7, 5, 4];
let frequenciaAlunos = [90, 80, 70, 60, 50];

for (let i = 0; i < alunos.length; i++) {
    console.log("Aluno: " + alunos[i] + ", Nota: " + notasAlunos[i] + ", Frequência: " + frequenciaAlunos[i]);
}

let somarNotas = 0;

for(let i = 0; i < notasAlunos.length; i++){
    somarNotas = somarNotas + notasAlunos[i]
     
}

 let mediaNotas = (somarNotas / notasAlunos.length);
 console.log("A média da turma é: "+mediaNotas);

for(let i = 0; i < alunos.length; i++){
    if(notasAlunos[i] >= 7 && frequenciaAlunos[i] >= 75){
    console.log("Aluno: "+ alunos[i] + " foi aprovado");   
} else if(notasAlunos[i] >=5 && frequenciaAlunos[i] >= 75){
     console.log("Aluno: "+ alunos[i] + " está de recuperação");  
}else{
     console.log("Aluno: "+ alunos[i] + " foi reprovado");
}
} 

let opcao = 4;


switch (opcao) {
    case 1: 
    console.log("----- Lista de Alunos -----");
    console.log("1. João");    
    console.log("2. Maria");   
    console.log("3. Pedro");    
    console.log("4. Ana");    
    console.log("5. Lucas");
    break;
    
   case 2:
        console.log("----- Média Geral -----");  
        console.log("A média da turma é: " + mediaNotas);
        break;

        case 3:
        console.log("----- Situação dos Alunos -----"); 
        for(let i = 0; i < alunos.length; i++){
    if(notasAlunos[i] >= 7 && frequenciaAlunos[i] >= 75){
    console.log("Aluno: "+ alunos[i] + " foi aprovado");   
    } else if(notasAlunos[i] >=5 && frequenciaAlunos[i] >= 75){
     console.log("Aluno: "+ alunos[i] + " está de recuperação");  
}else{
    console.log("Aluno: "+ alunos[i] + "foi reprovado!");
}
} 
        break;
        case 4:
        console.log("----- Resumo da Turma -----");
        let aprovados = 0;
        let reprovados = 0;
        let recuperacao = 0;
        
        for(let i = 0; i < alunos.length; i++){
            if(notasAlunos[i] >= 7 && frequenciaAlunos[i] >=75){
                aprovados++;
            }else if(notasAlunos[i] >=5 && frequenciaAlunos[i] >=75){
                recuperacao++;
            }else{
                reprovados++;
            }
        }
        console.log("Total de Alunos: " + alunos.lenght);
        console.log("Quantidade de aprovados: "+aprovados);
        console.log("Quantidade de reprovados: "+reprovados);
        console.log("Quantidade de recuperação: "+recuperacao)
        break;

        default:
            console.log("Opção Inválida! Escolha uma de 1 a 4");
            break;
        
}