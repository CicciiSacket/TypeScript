"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const uuidv4_1 = require("uuidv4");
class Account {
    constructor(namePerson, iban = uuidv4_1.uuid(), budget, transfers = []) {
        this.getCountNumber = () => this.iban;
        this.getbadget = () => this.budget;
        this.getTransfer = () => this.transfers;
        this.namePerson = namePerson,
            this.iban = iban;
        this.budget = budget;
        this.transfers = transfers;
    }
}
exports.Account = Account;
