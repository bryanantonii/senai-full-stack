## PERGUNTAS

**1. O que sao operadores em programacao?**
---
 Símbolos especiais utilizados para manipular dados, realizar cálculos, comparar valores e avaliar condições
 
 ---

**2. Para que servem os operadores aritmeticos? Cite exemplos**
---
Servem para realizar operações matemáticas básicas. Exemplos: + (soma), - (subtração), * (multiplicação), / (divisão), % (módulo) e ** (potência).

---

**3. Qual a diferenca entre / e % em JavaScript?**
---
O operador / realiza divisão e retorna o resultado com decimais (10 / 3 = 3.333...). O operador % retorna o resto da divisão (10 % 3 = 1).

---

**4. Como descobrir se um numero e par usando o operador %?**
---
Usando numero % 2 === 0. Se o resultado for 0, o número é par; se for 1, é ímpar.

---

**5. O que e uma expressao em programacao?**
---
Uma combinação de valores, variáveis e operadores que produz um resultado. Exemplo: 5 + 3 * 2 ou nome === 'João'.

---

**6. O que significa precedencia de operadores?**
---
É a ordem em que os operadores são executados. Operadores com maior precedência são executados primeiro. Exemplo: * tem precedência sobre +, então 2 + 3 * 4 = 14 (não 20).

---

**7. Por que os parenteses podem mudar o resultado de uma expressao?**
---
Parênteses alteram a ordem de execução. (2 + 3) * 4 = 20, enquanto 2 + 3 * 4 = 14. Os parênteses forçam a soma a ser feita primeiro.

---

**8. Qual a diferenca entre =, == e ===?**
---
= é atribuição (x = 5). == compara valores ignorando tipo (5 == '5' é true). === compara valores e tipo (5 === '5' é false).

---

**9. Por que e recomendado usar === em JavaScript?**
---
Porque === é mais seguro e previne erros de comparação. O == pode causar comportamentos inesperados por fazer conversão de tipo automática.

---

**10. O que os operadores relacionais retornam: texto, numero ou boolean?**
---
Retornam valores booleanos: true ou false. Exemplos: 5 > 3 (true), 2 === 3 (false).

---

**11. Quando usamos o operador >? E o operador >=?**
---
 (maior que): para verificar se um valor é maior (5 > 3 = true). >= (maior ou igual): para verificar se é maior ou igual (5 >= 5 = true).

---

**12. Quando usamos o operador < ? E o operador <=?**
---
< (menor que): para verificar se um valor é menor (3 < 5 = true). <= (menor ou igual): para verificar se é menor ou igual (5 <= 5 = true).

---

**13. Para que serve o operador logico &&?**
---
Operador AND (e). Retorna true apenas quando AMBAS as condições são verdadeiras. Exemplo: idade >= 18 && temCNH === true.

---

**14. Para que serve o operador logico ||?**
---
Operador OR (ou). Retorna true quando PELO MENOS uma das condições é verdadeira. Exemplo: temCartaoCredito || temCartaoDebito.

---

**15. Para que serve o operador logico !?**
---
Operador NOT (não). Inverte o valor booleano. Se algo é true, !algo é false. Exemplo: !estaChovendo.

---

**16. Qual a diferenca entre uma condicao simples e uma condicao composta?**
---
Simples: uma única condição (idade > 18). Composta: duas ou mais condições (idade > 18 && temCNH === true).

---

**17. Explique uma situacao real em que duas condicoes precisam ser verdadeiras ao mesmo tempo.**
---
Compra com cartão de crédito: precisa ter saldo disponível && o cartão não estar bloqueado. Ambas devem ser true para aprovar a transação.

---

**18. Explique uma situacao real em que apenas uma entre duas condicoes precisa ser verdadeira.**
---
Entrada em um evento: pode entrar com convite || pode entrar com ingresso comprado. Basta uma ser verdadeira para permitir a entrada.

---

**19. Como o console.log() pode ajudar a encontrar erros no codigo?**
---
Permite visualizar valores de variáveis e resultados em tempo de execução. Ajuda a rastrear o fluxo do programa e identificar onde ocorrem erros.

---

**20. Por que devemos testar o mesmo programa com valores diferentes?**
---
Para garantir que o programa funciona em vários cenários. Testes com valores extremos (limite) ajudam a encontrar bugs não detectados em testes simples.

---