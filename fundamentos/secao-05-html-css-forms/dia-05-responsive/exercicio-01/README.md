# Execícios - Criar página para tela pequena

* Faça o tamanho da fonte ser maior;
* Faça o tamanho da fonte dos elementos h1 ser menor;
* Aumente o espaçamento entre as figuras;
* Adicione um pouco de margin na página.

```
max-width: 600px: Telas de celular. (Mobile devices)
min-width: 600px: iPads, Tablets
min-width: 768px: Telas menores, laptops
min-width: 992px: Desktops
min-width: 1200px — Telas grandes, screens e TV.
```

Agora que temos um padrão, vamos criar um breakpoint para telas menores de laptops. Para isso nós podemos consultar nossa tabela acima e utilizar o min-width: 768px e quando tivermos em telas menores que 768px esse estilo não vai ser aplicado. Esse será o primeiro breakpoint do layout. Um breakpoint é apenas um ponto onde estamos definindo que o design atual deve mudar. Ok?

Crie uma media query no seu arquivo CSS, usando a dimensão em pixels que você guardou como o min-width que foi apresentado acima.

* Altere a cor de fundo (isso vai te ajudar a perceber quando a media query teve efeito);
* Ajuste o tamanho da fonte;
* Ajuste as margens da página;
* Faça as imagens serem mostradas em duas colunas.
* Agora, você vai criar outro breakpoint para telas grandes, como por exemplo, desktops. Para isso você pode consultar novamente nossa tabela com os tamanhos.
* Crie uma nova media query no seu arquivo CSS usando a dimensão para telas de desktop e realize os seguintes ajustes dentro do breakpoint (aqui podemos usar o tamanho de tela de 992px):
  * Altere a cor de fundo;
  * Ajuste o tamanho da fonte;
  * Ajuste as margens da página;
  * Adicione a propriedade max-width à página, para garantir que a largura das linhas não fique muito grande.