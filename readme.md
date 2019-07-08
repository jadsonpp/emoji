# Trabalho de Calculo II

## Integrantes

    - Icaro Duarte Gavazza Lima
    - Magno Macedo de Oliveira
    - Jadson Pereira

## Orientadora

    - Adriana Padua Lovatte

## Objetivo

O objetivo do trabalho é relacionar os assuntos ligados à <b>Cálculo Diferencial</b> e <b>Integral</b> com programação, 
verificando que curvas paramétricas e coordenadas polares podem ser implementadas para gráficos de curvas não usuais e com movimentos.
<br>
O Trabalho consiste em utilizar <b>curvas paramétricas</b>, <b>coordenadas polares</b> ou <b>superfícies cônicas</b>, ou ambas para obter a Construção de um emoji com movimento.

## Introdução
Para implementar o emoji com movimentos, nós utilizamos o HTML para estruturar a página, o CSS que é um mecanismo para adicionar um estilo na 
página web e a linguagem JavaScript para poder desenhar e fazer a animação. <br>
Na implementação do nosso emoji, utilizamos o circulo para representar o rosto, o cardioide para representar o coração, 
a espiral de arquimedes para representar o olho, gráfico do seno e do cosseno para representar a boca.  

## Teoria
As coordenadas polares são um sistema de coordenadas bidimensional, onde cada ponto em uma coordenada polar é representado por um ângulo e 
por uma distância. <br>"O ponto de referência (análogo a origem no sistema cartesiano) é chamado de polo, e a semirreta do polo na direção
 de referência é o eixo polar. A distância a partir do polo é chamada coordenada radial ou raio, e o ângulo é chamado coordenada angular, ângulo polar ou azimute"[wikipedia]
### Espiral de Arquimedes
A espiral de arquimedes: "Se define como o lugar geométrico de um ponto movendo-se a velocidade constante sobre uma reta que gira 
sobre um ponto de origem fixo a velocidade angular constante"[wikipedia] <br>
Em coordenadas polares, a espiral de arquimedes é representada por : <br>
![formulaEspiral](/imagens/formula_espiral.PNG),onde a e b são numeros reais.    
<br>
Formula retirada de: [Espiral de Arquimedes](https://pt.wikipedia.org/wiki/Espiral_de_Arquimedes)


### Cardioide
O cardioide é uma curva em forma de coração, representado em coordenadas polares com a equação:<br>
![formulaCardioide](/imagens/formula_cordioide.PNG)<br>
Formula retirada de: [Cardioides](https://pt.wikipedia.org/wiki/Cardioide)

 
  
## Curvas usadas

    Theta:
    - parametrização ex: de -100 a 100

    Frame:
    - variavel incremental
    - usada para modificar as funções de um frame para o outro

    Carinha:
    - x: cos(theta)*200
    - y: sen(theta)*200

    Olhos:
    - x: Math.cos((theta-frame))* index)
    - y: Math.sin((theta-frame))* index)

    boca:
    - x: theta*8
    - y: Math.sin(theta)*Math.sin(frame)*6

    corações:
    - x: Math.sin(theta + frame) * index + Math.sin(frame) * 100
    - y: -1 * (Math.cos(theta) * index) + 256

## Referencias

- STEWART, J. Cálculo. Vol. 2. 7a ed. São Paulo: Cengage Learning, 2009.
- W3Schools https://www.w3schools.com/graphics/svg_intro.asp acessado em 05 de julho de 2019
-Espiral de Arquimendes: https://pt.wikipedia.org/wiki/Espiral_de_Arquimedes acessado em 08 de julho de 2019.
-Cardioide: https://pt.wikipedia.org/wiki/Cardioide acessado em 08 de julho de 2019.
- Coordenadas Polares: https://pt.wikipedia.org/wiki/Coordenadas_polares acessado em 08 de julho de 2019.
