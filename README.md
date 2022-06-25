# API de customers

Uma api simples com o intuito de aprender sobre desenvolvimento utilizando repositories e docker.

# Como reproduzir

`npm install` para instalar todas as depedências. <br />
`docker compose up` para baixar o postgres e o pgadmin em containers. <br />
É necessário criar um banco de dados chamado payment para a aplicação funcionar.

# Rotas

Para pegar todos os customers: `ip/customers` -> requisição do tipo GET <br />
Para criar um customer: `ip/customers` -> Requisição do tipo POST
