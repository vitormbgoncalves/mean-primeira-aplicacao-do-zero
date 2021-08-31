<p align="center">
  <img width="734" height="193" src="https://www.rlogical.com/wp-content/uploads/2019/07/hire_angular_js_developer.png">
</p>

<h1 align="center">       
   MEAN stack
</h1>

<h5 align="center">
  MongoDB, Express, AngularJS, and Node.js <br>
</h5>

  <h4 align="center">
    <a href="#-descrição">Descrição</a> |  
    <a href="#-fotos">Fotos</a> |  
    <a href="#-tecnologias">Tecnologias</a> |
    <a href="#-execução-do-backend">Execução do Backend</a> |
    <a href="#-execução-do-frontend">Execução do Frontend</a> |
    <a href="#-nota-rápida">Nota rápida</a> 
  </h4>

## 💾 Descrição

Projeto criado durante o curso [Mongo, Express, Angular 1 e Node - Primeira APP do ZERO!] da [Cod3r](https://www.udemy.com/course/mean-primeira-aplicacao-do-zero/).

Este projeto disponibiliza uma API REST desenvolvida com NodeJS e MongoDB, e possui como funcionalidade um CRUD para criar, mostrar, atualizar e deletar informações em um sistema de pagamentos.

Este projeto também disponibiliza uma aplicação de página única (Single-page application) feita com Angular 1 e AdminLTE. Esta interface disponibiliza um dashboard do sistema de ciclos de pagamentos.

## 🖼 Fotos

<p align="center">
  <img width="960" height="523" src="https://i.ibb.co/djW1w4S/Screenshot-20210830-165959.png">
</p>
<p align="center">
  <img width="960" height="523" src="https://i.ibb.co/njjXxFT/Screenshot-20210830-165256.png">
</p>


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [npm](https://yarnpkg.com/): gerenciador de pacotes para JavaScript.
- [Docker](https://www.docker.com/): plataforma para disponibilizar aplicações através de containers.
- [MongoDB](https://www.mongodb.com/): banco de dados NoSQL.
- [Mongoose](https://mongoosejs.com/): ferramenta para mapeamento objeto-documento.
- [MongoDB Compass](https://www.mongodb.com/pt-br/products/compass): ferramenta gráfica para gerenciamento do MongoDB.
- [Node](https://nodejs.org/en/): runtime para execução de código JavaScript do lado do servidor.
- [Express](https://expressjs.com/pt-br/): framework JavaScript para criação de aplicações backend.
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js): metodo para criptografar senhas a serem salvas.
- [Lodash](https://lodash.com/): biblioteca que fornece um conjunto de funções simplificadas.
- [PM2](https://pm2.keymetrics.io/): gerenciador de processos para Node.js.
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken): implentação do JSON Web Tokens para Node.js.
- [Postman](https://insomnia.rest/): cliente para testes de APIs REST.
- [CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS): mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens.
- [Angular](https://angularjs.org/): framework JavaScript fronend.
- [AdminLTE](https://adminlte.io/): Bootstrap Admin Dashboard Template.
- [Babel](https://babeljs.io/): transcompilador de JavaScript usado para converter o código ECMAScript.
- [Gulp](https://gulpjs.com/): ferramenta de automação de tarefas para JavaScript.

## 🖥 Execução do Backend

1. Clone o projeto git através do terminal;

```shell
git clone https://github.com/vitormbgoncalves/mean-primeira-aplicacao-do-zero.git
cd mean-primeira-aplicacao-do-zero/backend
```

3. Para instalar o MongoDB no docker execute o comando abaixo:

```shell
sudo docker run \
    --name mean_mongodb \
    -p 27017:27017 \
    -d \
    mongo:4
```

4. Para instalar todas dependências do projeto execute o comando abaixo;

```shell
npm install
```

3. Para iniciar a aplicação execute o comando abaixo

```shell
npm run dev
```

## 💻 Execução do Frontend

1. A partir do diretório principal do projeto `mean-primeira-aplicacao-do-zero`, mude para o diretório do projeto frontend:

```shell
cd angular1
```

2. Para instalar todas dependências do projeto execute o comando abaixo;

```shell
npm install
```

3. Para iniciar a aplicação execute o comando abaixo

```shell
npm run dev
```

## 🗒 Nota rápida

Este projeto foi desenvolvido e executado no Linux.
