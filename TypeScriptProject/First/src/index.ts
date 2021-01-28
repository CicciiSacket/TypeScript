import {Bank} from './Bank'

let bancaPoveri = new Bank(1234,[],[])
bancaPoveri.addAccount('pippo','12345',1200)
bancaPoveri.addAccount('pluto','6789',1200)
bancaPoveri.addAccount('paperino','101112',1200)
// bancaPoveri.addAccount('paperino2','101',1200)
// bancaPoveri.removeAccount('101')
console.log(bancaPoveri.getAccount('12345'))
console.log(bancaPoveri.getAccount('6789'))
bancaPoveri.generateTransfer('12345','6789',200)
console.log(bancaPoveri.getTotalAccounts())
console.log(bancaPoveri.getTotalTransfer())
