"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(namePerson, countNumber, balance, transfers = []) {
        this.getCountNumber = () => this.countNumber;
        this.getBalance = () => this.balance;
        this.getTransfer = () => this.transfers;
        this.toString = () => { this.namePerson + '\t' + this.balance; };
        this.namePerson = namePerson,
            this.countNumber = countNumber,
            this.balance = balance;
        this.transfers = transfers;
    }
}
exports.Account = Account;
