"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(namePerson, countNumber, balance, transfers = []) {
        this.namePerson = namePerson,
            this.countNumber = countNumber,
            this.balance = balance;
        this.transfers = transfers;
    }
    getCountNumber() { return this.countNumber; }
    getBalance() { return this.balance; }
    getTransfer() { return this.transfers; }
}
exports.Account = Account;
