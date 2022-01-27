# Curso-JavaScript
Estudos de JavaScript
# Comandos
**window.alert()**      Mostra a mensagem no topo do navegador
**window.prompt()**     Faz uma pergunta no topo do navegdor
**window.confirm()**    Campo de confirmação Sim ou Não (Booleano)
**document.write()**    Exibe o texto no corpo da página
# Operadores
**Aritiméticos**    + Soma
                    - Subtração
                    * Multiplicação
                    / Divisão (Números reais)
                    % Divisão (Números inteiros - O resultado é o que sobra da divisão)
                    ** - Ao quadrado
**Atribuição** Simplificação
                n += 4 -- (n = n + 4) -- É a mesma coisa que reutilizar a variável n e atribulir um novo valor
                n -= 5 -- (n = n - 5)
                n *= 4 -- (n = n * 4)
                n /= 2 -- (n = n / 2)
                n **= 2 -- (n = n ** 2)
                n %= 5 -- (n = n % 5)

**Incremento**  n++ ou ++n -- Acrecenta mais 1 a variável (n+1)
                n-- ou --n -- Subtrai 1 número a variável

**Relacionais** Sempre uma resposta booleana 
                > Maior (5 > 2 - True)
                < Menor (7 < 4 - False)
                >= Maior ou igual (8 >= 8 - True)
                <= Menor ou igual (9 <= 7 - False)
                == Igual (5 == 5 - True)
                != Diferente (4 != 4 - False)
                === Operador de identidade restrito - Operadores idênticos, com o mesmo valor, número e tipo. (5 === '5' - False / 5 === 5 - True)

**Lógicos**     ! Negação
                && Conjunção (e lógico)
                || Disjunção (ou lógico)

**Ternários**   ($salario > 1000 ? 0.10 : 0.15); -- (teste ? true : false)
                A variável apresenta um condição. A **(?)** diz se for verdadeiro acrescente o valor após a **(?)**, se for falso **(:)** acrescentar o valor após **(:)**

**Typeof**      Exibe de qual tipo primitivo a variável é

# Precedência dos operadores aritiméticos (Ordem de importância)
() -- Primeiro o parênteses
** -- Segundo potência
* % -- Terceiro multiplicação, divisão real e divisão inteira
+ - -- Quarto soma e subtração

# Precedência dos operadores relacionais
O que aparecer primeiro, leitura da esquerda para a direita

# Precedência dos operadores lógicos
! -- Primeiro o NÃO
&& -- Segundo o E
|| -- Terceiro o OU
# Converter String para Números inteiros e reais
(number + number) para adição - parseInt (inteiros) - parseFloat (reais)
(string + string) para concatenação

# Forma atual
Number - Ao colocar apenas Number, o JS faz a distinção de números inteiros e reais.

# Converter Número para string
Sting(n)
n.toString()
# Template string
Se utiliza de ${} para chamar uma variável

# Formatando Stings
    'Estou aprendendo s' -- Não faz interpolação
    'Estou aprendendo ' + s -- Usa concatenação
    `Estou aprendendo ${s}` -- Usa template string
 
 # Atributos
 s.length -- Quantos caracteres a string tem
 s.toUpperCase() -- Tudo para letras "MAIÚSCULAS"
 s.toLowerCase() -- Tudo para letras "minúsculas"

 n1.toFixed(2) -- Mostra a quantidade de casas após a vírgula eu quero. A quantidade vai dentro do parenteses.
 n1.toFixed(2).replace('.',',') --Mostra a quantidade de casas após a vírgula e substitui o ponto por vírgula na exibição.
 n1.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}) -- Fazer a exibição dos valores com o valor monetário do país determinado. (Nesse caso R$)

 # DOM
 Seleções

**Marca** -- getElementsByTagName() -- Seleciona os itens pelo nome. Ex.: <p>, <h1>
**ID** -- getElementsById() -- Seleciona os itens pelo ID. Ex.: #texto #selector #result
**Nome** -- getElementsByName -- Seleciona os itens pelo nome. Ex.:
**Classe** -- getElementsByClassName () -- Seleciona os itens pela classe. Ex.:
**Seletor** -- querySelector() ou querySelectorAll() -- Seleção mais moderna. querySelector('div#msg')