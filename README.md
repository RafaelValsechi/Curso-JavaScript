# Curso-JavaScript
Estudos de JavaScript

# Comandos
window.alert() // Mostra a mensagem no topo do navegador
window.prompt() // Faz uma pergunta no topo do navegdor
window.confirm() // Campo de confirmação Sim ou Não (Booleano)
document.write() // Exibe o texto no corpo da página


# Typeof
Exibe de qual tipo primitivo a variável é
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
    'Estou aprendendo s' // Não faz interpolação
    'Estou aprendendo ' + s // Usa concatenação
    `Estou aprendendo ${s}` // Usa template string
 
 # Atributos
 s.length // Quantos caracteres a string tem
 s.toUpperCase() // Tudo para letras "MAIÚSCULAS"
 s.toLowerCase() // Tudo para letras "minúsculas"

 n1.toFixed(2) // Mostra a quantidade de casas após a vírgula eu quero. A quantidade vai dentro do parenteses.
 n1.toFixed(2).replace('.',',') //Mostra a quantidade de casas após a vírgula e substitui o ponto por vírgula na exibição.
 n1.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}) // Fazer a exibição dos valores com o ícone da moeda do país determinado. (Nesse caso R$)