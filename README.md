# Maeztra Resoluções.

## Pasta Questions.

### Primeira questão (resposta_questao_1.js): 

A função Question é responsável por receber o valor que o usuário coloca e fazer a validação se está ordenado ou não.

A validação é feita utilizando duas funções orderCre e orderDecrem, onde ambas possuem a mesma lógica de validação, mas diferem em um único ponto para validar a ordem crescente e decrescente.

O primeiro passo de cada função é transformar o número que o usuário digita em uma string ```markdown const valueString = String(value); ```. Além disso, inicio duas variáveis ​​com valores pré-definidos len e aux ```markdown const len = valueString.length; let aux = 0; ```, onde len contém o tamanho valueString para poder controlar a validação dentro do ```markdown for ``` e aux começa com 0 para fazer a contagem.

A lógica gira em torno de comparar o número atual mais 1 com o próximo, se os dois forem iguais indica que existe uma relação de ordem crescente. Essa lógica é aplicada a todos os números, exceto ao último, pois não terá um elemento depois dele. Se houver uma sequência, a variável aux será incrementada e quando for concluída, outra validação será aplicada. Se aux for igual à variável len - 1, a sequência está completa.

```markdown

if(( Number(valueString[a]) + 1 === Number(valueString[a+1])) && (a < len)){
    aux++;
}

```

Essa lógica é aplicada para validar a ordem crescente. Para validar a ordem decrescente, basta substituir```markdown Number(valueString[a]) + 1 ``` por ```markdown Number(valueString[a]) - 1 ```, desta forma pega o número atual - 1 e compara se é igual ao próximo.

### Segunda questão (resposta_questao_2.js):

Para resolver esse problema, foram utilizadas as propriedades fornecidas pelo javascript, no caso ```markdown .filter() ``` e ```markdown .indexOf() ``` onde um filtro é aplicado ao array e dentro da função um indexOf é chamado nele para encontrar o índice do próprio elemento. Se o elemento indexOf encontrar um índice diferente da chave "i", isso indica que houve uma repetição.

### Terceira questão (resposta_questao_3.js):

Para resolver essa questão, dividi toda a lógica em funções menores e divertidas.

A função de identificação é responsável por determinar qual é o par correto de cada elemento, por exemplo, se você digitar "(" retornará ")" que é o seu par. Ele é usado para encontrar o par de um elemento ao percorrer a matriz.

pairDetection é responsável por encontrar o primeiro par do elemento analisado ao percorrer o array.

charValidation da o start em todo o processo. No início ele transforma a string em um array de caracteres, inicia uma constante tam que tem o tamanho do array criado e outras variáveis ​​auxiliares ```markdown const array = value.split(' '); const tam = array.length; let typeE, len=0, args = []; ```. Em seguida, aplica um forEach para validar a sequência.

### Quarta questão (resposta_questao_4.js):

A solução desse problema consiste em algumas etapas.

No início, uma sequência de variáveis ​​auxiliares é declarada. Em seguida, faço a divisão da matriz em dois vetores/array que contém os elementos.

```markdown 
    valueMatriz.forEach(element => {
        yearX.push(element[0]);
        yearY.push(element[1]);
    });
```

yearX é o vetor dos anos em que cada indivíduo começou a trabalhar e yearY é o vetor dos anos em que cada indivíduo completou seu período de trabalho.

Após este processo, ele começa a juntar/concatenar os dois arrays criados e então fazer uma filtragem para eliminar repetições e capturar o tamanho final do array gerando yearResultAux.

```markdown 
    yearResultAux = yearX.concat(yearY);

    yearResultAux = yearResultAux.filter(function(este, i) {
        return yearResultAux.indexOf(este) === i;
    });

    len = yearResultAux.length;
```

yearResultV é uma variável auxiliar responsável pela contagem de repetições para cada ano.

```markdown 
    yearResultV = new Array(len).fill(0);
```

O proximo passo é a contagem de repetições.

Para realizar esse processo, utilizo a matriz fornecida pelo usuário e analiso cada elemento em relação ao vetor de anos yearResultAux. Se houver um número igual, é feita uma soma no array yearResultV na posição correspondente ao elemento do vetor yearResultAux.

```markdown 
    valueMatriz.forEach(element => {
        yearResultAux.forEach((e,k)=>{
            if(e == element[0]){
                yearResultV[k] ++;
            } else if(e == element[1]){
                yearResultV[k] ++;
            }
        });
    });
```

Por fim, é feita uma "filtragem" para ter os anos que possuem maior repetição, no caso de mais de uma repetição.

```markdown 
    yearResultV.forEach((element, key)=>{
        if(element > 1){
            yearResult.push(yearResultAux[key]);
        }
    });
```

### Quinta questão (resposta_questao_5.js):

A quinta questão é simplesmente resolvida usando uma função que tem o efeito fatoração/fatorial, por exemplo 5! em matemática.

```markdown 
    for(i;i<len;i++){
        if(aux > 0){
            result = result*aux;
            aux = aux - 1;
        }
    }
```

## Pasta Layout.