// Importa o framework Express, que facilita a criação de servidores web em Node.js
const express = require("express");

// Importa o módulo CORS para habilitar o suporte a Cross-Origin Resource Sharing (CORS)
const cors = require("cors");

// Cria uma instância do aplicativo Express
const app = express();

// Habilita o middleware para analisar o corpo das solicitações como JSON
app.use(express.json());

// Habilita o middleware CORS para lidar com requisições de diferentes origens
app.use(cors({ origin: true }));

// Importa o módulo Axios para realizar requisições HTTP
const axios = require("axios");

// Define uma rota POST chamada "/authenticate" que será acessada quando uma solicitação POST for feita para o servidor
app.post("/authenticate", async (req, res) => {
  // Extrai o valor da propriedade 'username' do corpo da solicitação
  const { username } = req.body;

  // Tenta realizar uma requisição HTTP do tipo PUT para autenticar o usuário no Chat Engine
  try {
    // Utiliza o Axios para enviar uma requisição PUT para o endpoint "https://api.chatengine.io/users/"
    // Envia dados como payload no formato JSON, incluindo 'username', 'secret', e 'first_name'
    // Adiciona cabeçalho com a chave privada ("Private-Key") para autenticação na API do Chat Engine
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "26ad6b88-0889-47d7-a621-9640bfd97793" } }
    );

    // Retorna a resposta do Chat Engine como JSON com o status da resposta
    return res.status(r.status).json(r.data);
  } catch (e) {
    // Se ocorrer um erro durante a requisição, retorna a resposta de erro como JSON
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);