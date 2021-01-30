"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const uuidv4_1 = require("uuidv4");
const banks = require('../Bank.json');
class Bank {
    constructor(branch, treasure, accounts = [], transactions = []) {
        this.accounts = [];
        this.transactions = [];
        this.branch = branch, //numero di filiale della banca
            this.treasure = treasure; //tesoro della banca
        this.accounts = accounts; //account della banca
        this.transactions = transactions; //transazioni della banca
    }
}
exports.Bank = Bank;
Bank.generateBank = (branch, treasure, accounts = [], transactions = []) => {
    let bank = new Bank(branch, treasure, accounts, transactions);
    banks.push(bank);
};
Bank.deleteBank = (branch) => {
    let index = banks.index((item) => item.branch === branch);
    banks.pop(index);
};
Bank.generateAccount = (branchBank, namePerson, budget, IBAN, transactions) => {
    let user = {
        name: namePerson,
        IBAN: IBAN = uuidv4_1.uuid(),
        budget: budget,
        transactions: transactions = []
    };
    let selected = (banks.reduce((bank) => bank.branch === branchBank));
    console.log(selected);
    selected.accounts.push(user);
};
