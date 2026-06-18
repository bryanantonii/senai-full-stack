**1. O que é uma estrutura condicional em programação? Dê um exemplo do cotidiano usando "se... então...
senão".**
---
    é um comando que permite ao programa tomar decisões e seguir caminhos diferentes com base no resultado de um teste lógico, por exemplo: Quero dormir, ou seja: se estou com sono, então deito-me e durmo

---

**2. Qual é a diferença entre usar apenas if e usar if/else?**
---
    O if testa uma condição específica e executa um código se ela for verdadeira. O if/else cria um caminho alternativo, garantindo que um bloco de código seja executado quando a condição for verdadeira, e outro bloco seja executado se ela for falsa, tornando as respostas do programa mutuamente exclusivas

---


**3. Quando usamos else if? Crie um exemplo com três ou mais possibilidades.**
---

    Usamos a estrutura else if quando precisamos verificar múltiplas condições mutuamente exclusivas em um código, por exemplo:

    se nota for maior ou igual 90, então excelente
    senão se nota for maior ou igual a 80, então muito bom
    senão se nota for maior ou igual a 70, então bom
    senão se nota for maior ou giaul a 60, então precisa melhorar
    senão, então reprovado

---

**4. O que significa uma condição retornar true ou false?**
---
    Significa que ela é uma expressão booleana

---

**5. Qual é a diferença entre == e === em JavaScript? Qual deles é mais recomendado?**
---
    Em JavaScript, a diferença está na estrita verificação do tipo de dado. O operador == compara apenas os valores (convertendo os tipos se necessário), enquanto o === exige que ambos os valores e os tipos de dados sejam idênticos

    Para evitar bugs, o recomendado é utilizar o uso do "==="


**6. Para que servem os operadores &&, || e !? Explique com um exemplo para cada um.**
---
    Os operadores &&, || e ! são operadores lógicos usados em linguagens de programação para trabalhar com valores booleanos (true e false).

     && (E lógico / AND)

    Retorna true somente se ambas as condições forem verdadeiras.

    Exemplo: 
    idade = 18;
    possuiCarteira = true;
    
    se idade >=18 && possuiCarteira{
        console.log("pode dirigir")
    }

    || (OU lógico / OR)

    Retorna true se pelo menos uma das condições for verdadeira.

    Exemplo

    temCupom = false
    ehClientePremium = true

    se tem cupom || eh clientepremium {
        console.log("Desconto aplicado")
    }

    ! (NÃO lógico / NOT)

    Inverte o valor booleano: se era true vira false, e se era false vira true.

    Exemplo:
    estaChovendo = true

    se !estaChovendo {
        console.log("Posso sair de casa")
    }

---    

**7. O que o operador % faz? Por que ele é útil para descobrir se um número é par ou ímpar?**
---

    O operador % (módulo) retorna o RESTO de uma divisão entre dois números.

    Exemplo: 10 % 3 = 1 (pois 10 dividido por 3 é 3, com resto 1)

    É útil para descobrir se um número é par ou ímpar porque:
    - Se um número dividido por 2 tem resto 0, então é PAR
    - Se um número dividido por 2 tem resto 1, então é ÍMPAR

    Exemplo:
    numero = 8
    se numero % 2 === 0 {
    console.log("É par")
    } else {
    console.log("É ímpar")
    }

---


**8. O que é switch case? Em que situação ele fica melhor do que vários else if?**
---

    Switch case é uma estrutura de controle que testa uma variável contra múltiplos valores específicos (chamados de "cases") e executa diferentes blocos de código para cada caso.

    Fica melhor que vários else if quando:
    - Você precisa comparar UMA variável contra VÁRIOS valores fixos
    - O código fica mais legível e organizado
    - Melhor desempenho (não testa todas as condições   sequencialmente)

    Exemplo:
    dia = 3
    switch(dia) {
    case 1:
        console.log("Segunda-feira")
        break
    case 2:
        console.log("Terça-feira")
        break
    case 3:
        console.log("Quarta-feira")
        break
    default:
        console.log("Dia inválido")
    }

---


**9. Para que servem break e default dentro de um switch?**
---

    break: Interrompe a execução do switch após um case ser executado. Sem o break, o programa continua executando os cases seguintes (efeito chamado "fall-through"), causando comportamentos indesejados.

    default: É o case "padrão" que executa quando nenhum dos outros cases encontra uma correspondência. Funciona como um "else" para o switch. É opcional mas recomendado.

    Exemplo:
    cor = "verde"
    switch(cor) {
    case "vermelho":
        console.log("Pare")
        break
    case "amarelo":
        console.log("Atenção")
        break
    case "verde":
        console.log("Siga")
        break
    default:
        console.log("Cor desconhecida")
    }

---

**10. Por que é importante testar o mesmo programa com vários valores diferentes?**
---

    É importante testar com vários valores diferentes porque:

    1. Garante que o programa funciona em TODOS os cenários possíveis
    2. Identifica bugs que só aparecem com valores específicos
    3. Valida os limites (bordas): valores muito pequenos, muito grandes, zero, valores negativos
    4. Confirma que todas as condições (if, else if, else, cases) funcionam corretamente
    5. Aumenta a confiabilidade e qualidade do código antes de colocar em produção
    6. Ajuda a encontrar problemas de lógica que não são óbvios

    Exemplo:
    Para um programa que calcula desconto por idade, você deveria testar com:
    - idade = 0 (limite inferior)
    - idade = 5 (criança)
    - idade = 18 (maior de idade)
    - idade = 65 (idoso)
    - idade = 150 (valor impossível, mas deve tratar)
    - idade = -5 (valor inválido, mas deve tratar)

---