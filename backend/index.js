const express = require('express');
const cors = require('cors');
const server = express();
const routes = require('./routes/routes');
require('dotenv').config();
server.use(cors());

server.use('/usuario', express.json(), routes); //pra levar pro arquivo de rotas.js

server.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
