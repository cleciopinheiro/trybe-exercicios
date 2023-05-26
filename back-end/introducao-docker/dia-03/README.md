# Agora a prática
🚀 Se liga nesse foguete!

>Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

Pronto, agora já podemos “dockerizar” todas as nossa aplicações e, não só isso, podemos “dockerizar” nossos ambientes inteiro, tanto aplicações, quanto bancos de dados e outras tecnologias, assim como suas comunicações e configurações.

Bora praticar!

## Exercício 1 🚀 :
Vamos aprimorar nossos conhecimentos sobre images e volumes, para isso:

1 - Crie um arquivo HTML chamado missao_trybe.html que tenha a seguinte estrutura:

* Tag <title> com o seguinte texto “Trybe”;
* Tag <H1> com o seguinte texto “Missão da Trybe”;
Tag <p> com o seguinte texto “Gerar oportunidade para pessoas”;
Salve o arquivo em qualquer lugar da sua máquina com a extensão html
2 - Crie um container para manter um servidor httpd:2.4.54 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.

3 - Após criar o container, acesse a página HTML que está rodando no servidor em seu browser.

4 - Acesse o arquivo missao_trybe.html e acrescente a tag <p> com o seguinte texto: “Nosso negócio é GENTE! #VQV”;

5 - Obtenha o id do container httpd:2.4.54;

6 - Obtenha o Mounts através da propriedade Source, que deve mostrar o volume desse container no Docker Host;

7 - Agora pare o container httpd:2.4.54;

8 - Exclua o seu container;

9 - Verifique se a pasta onde você salvo o arquivo html permanece no mesmo lugar;

10 - Obtenha o IMAGE ID do servidor;

11 - Depois de obter o IMAGE ID, exclua a imagem.

## Exercício 2 🚀:
Crie o arquivo Compose para subir um ghost blog, essa plataforma é similar com o WordPress e é utilizada para criar sites de conteúdo. Você pode ler no site oficial como criar conteúdos nele e utilizá-lo. Para esse exercício, utilizaremos apenas sua página de exemplo:

1 - Utilize a versão “3” no arquivo;

2 - Crie um service para subir a plataforma, utilize a imagem ghost:1-alpine;

3 - Publique a porta 2368, fazendo bind também para a 2368;

4 - Suba a aplicação utilizando o docker-compose e então acesse a porta publicada para validar se deu tudo certo.

## Exercício 3 🚀:
Por padrão o ghost utiliza um banco de dados SQLite interno para salvar as informações, porém, vamos alterar esse comportamento para exercitar nossos conhecimentos:

1 - Crie um novo serviço db para o nosso banco de dados:

* Podemos utilizar o banco de dados MySQL, utilize a imagem mysql:5.7.40;
* Precisamos definir uma senha root para o banco, para isso utilize a variável de ambiente MYSQL_ROOT_PASSWORD

2 - Agora precisamos configurar nosso serviço ghost para utilizar o banco de dados:

* Defina o tipo de banco de dados a ser usado pelo ghost definindo a variável de ambiente database__client para mysql;
* Defina o serviço db como servidor do banco de dados na variável de ambiente database__connection__host;
* Defina as credenciais para a conexão com o banco de dados
* Para definir a pessoa usuária (root), utilize a variável de ambiente database__connection__user
* Para definir a senha (a mesma que definimos no nosso serviço db), utilize a variável de ambiente database__connection__password
* Defina o nome ghost para o nome do database no banco de dados utilizando a variável de ambiente database__connection__database;
* Utilize a opção depends_on para criar relações de dependências entre os serviços.

3 - Suba o ambiente com o novo arquivo usando o docker-compose e então acesse a porta.

Exercício 4:
Agora vamos praticar os conceitos de volumes e networks.

1 - Configure o nosso serviço mysql para utilizar um volume, conforme vimos no conteúdo, utilize o caminho target /var/lib/mysql.

2 - Ao invés de utilizar a rede padrão criada pelo Compose, defina uma rede chamada my-network para a comunicação dos dois serviços.

3 - Suba o ambiente com o novo arquivo usando o docker-compose e então acesse-o.

Exercício 5:
Agora vamos criar um novo arquivo Compose, para rodarmos uma aplicação React, conforme vimos alguns exemplos do conteúdo:

1 - Inicie um novo projeto ReactJS utilizando o create-react-app;

2 - Crie o Dockerfile, conforme vimos na aula passada;

3 - Crie um novo arquivo Compose utilizando a versão 3;

4 - Defina um serviço no arquivo para nosso app, para isso utilize a opção build para apontar para o Dockerfile;

5 - Publique a porta exposta no Dockerfile fazendo bind para a porta 8080 do localhost;

## Exercício 6:
Para simularmos o processo de desenvolvimento, faça a alteração em alguma parte do código do app react, e então execute o comando para subir o serviço novamente, “rebuildando” a imagem para aplicar as alterações.

