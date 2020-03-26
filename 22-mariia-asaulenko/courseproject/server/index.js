const express = require('express')
const proxy = require('express-http-proxy');
const cors = require('cors');
const port = 9000;
const app = express();

app.use(cors());

app.get('*', proxy('http://openapi.justin.ua'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))