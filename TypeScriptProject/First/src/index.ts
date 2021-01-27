class bank{
    accounts:any[] = []
    transactions:any[] = []

    constructor(accounts:string[],transactions:number[]){
        this.transactions 
        this.accounts 
    }
    createAccount(countNumber:string,money:number): any{
        var user = { 
            countNumber:countNumber,
            money:money
        }
        this.accounts.push(user)
    }
    generateTransfer(countSend:string,countReceives:string,moneyTransfer:number):any{
        var transaction = {
            countSend : countSend,
            countReceives : countReceives,
            moneyTransfer : moneyTransfer
        }
        this.accounts.filter(account=> {if(account.countNumber === countSend){account.money -= moneyTransfer}})
        this.accounts.filter(account=> {if(account.countNumber === countReceives){account.money += moneyTransfer}})
        this.transactions.push(transaction)
    }
    getAccounts():any{
        return this.accounts
    }
    getTransactions():any{
        return this.transactions
    }
}


var primabanca = new bank([],[])

primabanca.createAccount('12345',1000)
primabanca.createAccount('10125',1000)

primabanca.generateTransfer('12345','10125',100)

console.log("Accounts: ",primabanca.getAccounts())
console.log('Transaction: ',primabanca.getTransactions())






