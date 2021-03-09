const express = require('express'); // importando a biblioteca express que trabalha com requisições
const routes = require('./routes'); // importando uma 'classe' que é um arquivo js externo e nao uma bibliotecas
const cors = require('cors'); // importando o modulo CORS que é um modulo de segurança para defiir que vai acessar a aplicação
const app = express(); //Criando a aplicação / ou seja referenciando toda a biblioteca express para  a variável app

app.use(routes);// Mostrando para o app que vamos ultilizar o arquivo routes, ou chamamos a 'clase' routes 
app.use(cors());

app.listen(3333);