"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bank_1 = require("./Bank");
let bancaPoveri = new Bank_1.Bank(1234, [], []);
bancaPoveri.addAccount('pippo', '12345', 1200);
bancaPoveri.addAccount('pluto', '6789', 1200);
bancaPoveri.addAccount('paperino', '101112', 1200);
// bancaPoveri.addAccount('paperino2','101',1200)
// bancaPoveri.removeAccount('101')
console.log('SINGLE_ACCOUNT', bancaPoveri.getAccount('12345'));
console.log('SINGLE_ACCOUNT', bancaPoveri.getAccount('6789'));
console.log('\n');
console.log(bancaPoveri.generateTransfer('12345', '6789', 200));
console.log('\n');
console.log('TOTAL_ACCOUNT: ', bancaPoveri.getTotalAccounts().toString());
console.log('\n');
console.log('TOTAL_TRANSACTION: ', bancaPoveri.getTotalTransfer());
console.log('\n');
// console.log(bancaPoveri.getAccountTransaction('101112'))
