"use strict";
class bank {
    constructor(accounts, transactions) {
        this.accounts = [];
        this.transactions = [];
        this.transactions;
        this.accounts;
    }
    createAccount(countNumber, money) {
        var user = {
            countNumber: countNumber,
            money: money
        };
        this.accounts.push(user);
    }
    generateTransfer(countSend, countReceives, moneyTransfer) {
        var transaction = {
            countSend: countSend,
            countReceives: countReceives,
            moneyTransfer: moneyTransfer
        };
        this.accounts.filter(account => { if (account.countNumber === countSend) {
            account.money -= moneyTransfer;
        } });
        this.accounts.filter(account => { if (account.countNumber === countReceives) {
            account.money += moneyTransfer;
        } });
        this.transactions.push(transaction);
    }
    getAccounts() {
        return this.accounts;
    }
    getTransactions() {
        return this.transactions;
    }
}
var primabanca = new bank([], []);
primabanca.createAccount('12345', 1000);
primabanca.createAccount('10125', 1000);
primabanca.generateTransfer('12345', '10125', 100);
console.log("Accounts: ", primabanca.getAccounts());
console.log('Transaction: ', primabanca.getTransactions());
