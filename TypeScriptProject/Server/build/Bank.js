"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const Account_1 = require("./Account");
const banks = require('../Bank.json');
class Bank {
    constructor(numberFiliale, accounts, transactions) {
        this.totalAccounts = [];
        this.transactions = [];
        this.getTotalAccounts = () => this.totalAccounts; //:string e toString
        this.getTotalTransfer = () => this.transactions;
        this.getAccount = (countNumber) => this.totalAccounts.filter(item => {
            if (item.iban === countNumber) {
                return item;
            }
        });
        this.addAccount = (namePerson, countNumber, budget) => {
            let newAccount = new Account_1.Account(namePerson, countNumber, budget);
            this.totalAccounts.push(newAccount);
            return newAccount;
        };
        this.removeAccount = (countNumber) => delete this.totalAccounts[this.totalAccounts.findIndex(item => {
            if (item.iban === countNumber)
                return item;
        })];
        this.generateTransfer = (countSend, countReceives, moneyTransfer) => {
            let transaction = {
                countSend: countSend,
                countReceives: countReceives,
                moneyTransfer: moneyTransfer
            };
            this.totalAccounts.filter(item => {
                if (item.iban === countSend) {
                    item.budget -= moneyTransfer;
                }
                item.transfers.push(transaction);
            });
            this.totalAccounts.filter(item => {
                if (item.iban === countReceives) {
                    item.budget += moneyTransfer;
                }
                item.transfers.push(transaction);
            });
            this.transactions.push(transaction);
            return transaction;
        };
        this.getAccountTransaction = (countNumber) => this.totalAccounts.filter(item => {
            if (item.iban === countNumber) {
                return item.transfers;
            }
        });
        this.numberFiliale = numberFiliale;
        this.transactions = transactions;
        this.totalAccounts = accounts;
    }
}
exports.Bank = Bank;
