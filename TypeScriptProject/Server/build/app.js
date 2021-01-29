"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('exe');
const express_1 = __importDefault(require("express"));
const Bank_1 = require("./Bank");
const app = express_1.default();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
module.exports = app.listen(3005);
let banks = require('../Bank.json');
app.get('/banks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield res.json({ banks: banks });
    }
    catch (error) {
        yield res.json(error);
    }
}));
app.post('/banks', ({ body: { branch, treasure } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    Bank_1.Bank.generateBank(branch, treasure);
    res.json({ banks: banks });
}));
app.post('/accounts', ({ body: { branchBank, namePerson, budget } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    Bank_1.Bank.generateAccount(branchBank, namePerson, budget);
    res.json({ banks: banks });
}));
