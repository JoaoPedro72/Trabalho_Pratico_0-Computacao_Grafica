# Primeiro trabalho da materia de Computação Grafica da Graduação de Engenharia de Computação

O objetivo é criar um site simples me apresentando

## [Link para visualização][site]

## Objetivos

1. Código HTML referente a um "esqueleto básico" de página HTML5                        OK
2. Um título no cabeçalho (ie, no &lt;head>&lt;/head>) com seu nome                     OK
3. Uma foto sua (pode ser do cachorro)                                                  OK
4. Um ou mais parágrafos descrevendo você                                               
5. Estilização simples em CSS, em um arquivo de folha de estilos (ie, `.css`).
   Por exemplo, você pode:
   - Mudar a cor de fundo (ou [colocar uma imagem][imagem-de-fundo])
   - Mudar a fonte do texto (pode usar fontes bonitas do 
     [Google Fonts][google-fonts])
   - Mudar o tamanho do texto
   - Colocar uma borda arredondada na sua foto
   - Posicionar a foto à direita ou à esquerda, com o texto ao redor dela
   - Outras coisinhas que achar legal
6. Ter um misterioso botão (ie, `<button>Clique aqui</button>`) na página que 
   faça alguma coisinha usando JavaScript [ao ser clicado][eventos-mouse].
   Pode colocar todo o código JavaScript dentro de 
   `<script>todo o código aqui</script>`. Algumas ideias:
   - Toque um efeito sonoro
     - `new Audio(urlParaAudio).play()`
   - Troque sua foto por outra que seja mais ecologicamente correta
     - [Alterando atributos][alterando-atributos] de elementos com JavaScript
   - Dispare uma centena de mensagens de alerta, fazendo com que o usuário 
     (o professor né) precise fechar e abrir o navegador (perde ponto, ok)
     - `alert(mensagem)`
   - Altere o estilo de algum elemento:
     - [Colocar ou remover uma classe][add-remove-classe] CSS de um elemento
     - [Definir uma propriedade][definir-propriedade] CSS diretamente
   - Fazer algum elemento (eg, um gif de abelhinha?) se mover na tela
     - Posicionar [elemento de forma absoluta][position-absolute]
     - Ao longo do tempo (eg, [`setInterval`][set-interval]), 
       definir suas propriedades de posição x e y para um novo valor 
       a cada atualização
   - Etc... por que não implementar todas essas e muito mais?

[site]: https://joaopedro72.github.io/Trabalho_Pratico_0-Computacao_Grafica/pagina
[google-fonts]: https://fonts.google.com/
[imagem-de-fundo]: https://fegemo.github.io/cefet-front-end/classes/html3/#imagem-de-fundo
[alterando-atributos]: https://fegemo.github.io/cefet-front-end/classes/js2/#alterando-atributos
[add-remove-classe]: https://fegemo.github.io/cefet-front-end/classes/js2/#colocando-removendo-classes
[definir-propriedade]: https://fegemo.github.io/cefet-front-end/classes/js3/#15
[position-absolute]: https://fegemo.github.io/cefet-front-end/classes/css5/#posicionamento-absoluto
[eventos-mouse]: https://fegemo.github.io/cefet-front-end/classes/js3/#eventos-de-mouse
[set-interval]: https://fegemo.github.io/cefet-front-end/classes/js3/#11
