"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('exe');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
module.exports = app.listen(3005);
const banks = require('../Bank.json');
console.log(banks.filter((item) => item.Account[0].iban === "0"));
//Esercizio bank api
