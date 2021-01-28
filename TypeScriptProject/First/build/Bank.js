"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const Accounts_1 = require("./Accounts");
class Bank {
    constructor(numberFiliale, accounts, transactions) {
        this.totalAccounts = [];
        this.transactions = [];
        this.getTotalAccounts = () => this.totalAccounts;
        this.getTotalTransfer = () => this.transactions;
        this.getAccount = (countNumber) => this.totalAccounts.filter(item => {
            if (item.countNumber === countNumber) {
                return item;
            }
        });
        this.addAccount = (namePerson, countNumber, balance) => {
            let newAccount = new Accounts_1.Account(namePerson, countNumber, balance);
            this.totalAccounts.push(newAccount);
            return newAccount;
        };
        this.removeAccount = (countNumber) => delete this.totalAccounts[this.totalAccounts.findIndex(item => { if (item.countNumber === countNumber)
            return item; })];
        this.generateTransfer = (countSend, countReceives, moneyTransfer) => {
            let transaction = {
                countSend: countSend,
                countReceives: countReceives,
                moneyTransfer: moneyTransfer
            };
            this.totalAccounts.filter(item => {
                if (item.countNumber === countSend) {
                    item.balance -= moneyTransfer;
                }
                item.transfers.push(transaction);
            });
            this.totalAccounts.filter(item => {
                if (item.countNumber === countReceives) {
                    item.balance += moneyTransfer;
                }
                item.transfers.push(transaction);
            });
            this.transactions.push(transaction);
            return transaction;
        };
        this.numberFiliale = numberFiliale;
        this.transactions = transactions;
        this.totalAccounts = accounts;
    }
}
exports.Bank = Bank;
