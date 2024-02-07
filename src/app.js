const express = require('express');
const mysql = require('mysql2');
const morgan = require('morgan');
const myConnection = require('express-myconnection');
const bodyParser = require('body-parser');
const router = require('./routes');
const cors = require('cors');
require('dotenv').config();
const logger = require('./utils/logger');
const app = express();

app.set('port', process.env.PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());
app.use(myConnection(mysql, {
  host: 'viaduct.proxy.rlwy.net',
  user: 'root',
  password: 'FdEAh2c5bhF2-6CBGG3da1-f6H-1D2BF',
  database: 'railway',
  port: "53361"
}, 'single'));

app.use('/', router)

app.listen(app.get('port'), () => {
  logger.info("Server on port "+ process.env.PORT);
  /* logger.warn("Example warn");
  logger.error("Example error"); */
});