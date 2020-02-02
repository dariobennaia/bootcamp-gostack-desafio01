const express = require('express');
const routes = require('./routes');
const registerRequests = require('./middlewares/register-requests');

const app = express();

app.use(express.json());
app.use(registerRequests);
app.use(routes);

app.listen(3000);