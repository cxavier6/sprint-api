<h1 align="center"> DicasAPI </h1>

## Sobre a aplicação

A aplicação DicasAPI foi desenvolvida com Javascript, Node.JS e Postman para verificação das rotas, em Sprint para o módulo IV de back-end do curso de Densenvolvimento Web Full Stack da Resilia.

## Objetivo

Desenvolver uma API REST que receber dicas, grava no banco de dados e devolve de forma aleatória uma das dicas armazenadas no banco de dados. A aplicação deve conter duas rotas, onde a rota <strong>'/create'</strong> recebe as dicas e grava no banco, e a rota <strong>'/tips'</strong> exibe uma das dicas de maneira aleatória.

## Tecnologias

- [X] Javascript(ES6)
- [X] Node.JS 16.x LTS
- [X] Express
- [X] Nodemon
- [X] Postman 

## Inicializando

Primeiro, deve-se clonar este repositório a partir do terminal com o comando abaixo:

```
https://github.com/cxavier6/sprint-api.git
```
Acessar a pasta da aplicação

```
cd sprint-api
```
Instalar as dependências necessárias

```
npm install
```

## Dependências
A depedência necessária instalada para este projeto foi a Express, que deve ser visualizada no arquivo package.json.
 
 ```javascript
 "dependencies": {
    "express": "^4.18.1"
  }
 ```
 
 ### Dependência de desenvolvimento
 
 A dependência instalada para o ambiente de desenvolvimento foi a Nodemon.
 
 ```javascript
 "devDependencies": {
    "nodemon": "^2.0.19"
  }
 ```
 
 O Nodemon pode ser instalado com o comando abaixo:
 
 ```
 npm install --save-dev nodemon
 ```
 
 ## Rotas
 
 Duas rotas estão presentes na aplicação, a rota <strong>'/create'</strong> e a rota <strong>'/tips'</strong>. A URL base fornecida é `http://localhost:port`, na qual port é o número da porta fornecida na constante port, que por base nesta aplicação é 3400, ou seja, a URL base é `http://localhost:3400`
 
 ### Adicionar dica
 
 Para adicionar uma dica deve-se acessar o Postman, ou aplicação semelhante, e fazer uma requisição HTTP do tipo POST com a url <strong>url-base/create</strong> e inserir a dica no formato JSON como no exemplo abaixo:
 
 ```json
 {
    "dica": "Javascript pode ser utilizado no front-end e no back-end"
 }
 ```
 
 ### Receber uma dica aleatória
 
 Para receber uma dica aleatória deve-se fazer uma requisição HTTP do tipo GET com a url <strong>url-base/tips</strong>, enviar e visualizar a dica no formato JSON como no exemplo abaixo:
 
 ```json
 {
    "dica": "HTML é uma linguagem de marcação e não de programação"
 }
 ```
 
Caso acontença algum erro na requisição, uma mensagam de `ERROR` será exibida.
 
 
