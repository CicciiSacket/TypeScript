"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const uuidv4_1 = require("uuidv4");
const banks = require('../Bank.json');
class Bank {
    constructor(branch, treasure, accounts = [], transactions = []) {
        this.accounts = [];
        this.transactions = [];
        this.branch = branch,
            this.treasure = treasure;
        this.accounts = accounts;
        this.transactions = transactions;
    }
}
exports.Bank = Bank;
Bank.generateBank = (branch, treasure, accounts = [], transactions = []) => {
    let bank = new Bank(branch, treasure, accounts, transactions);
    banks.push(bank);
};
Bank.generateAccount = (branchBank, namePerson, budget, IBAN, transactions) => {
    let user = {
        name: namePerson,
        IBAN: IBAN = uuidv4_1.uuid(),
        budget: budget,
        transactions: transactions = []
    };
    let selected = (banks.reduce((bank) => bank.branch === branchBank));
    console.log(selected.accounts.push(user));
};
