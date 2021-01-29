import { Account } from './Accounts'
import {Transaction} from './transaction'

export class Bank{
    numberFiliale:number
    totalAccounts:Account[] = []
    transactions:Transaction[] = []
    
    constructor(numberFiliale:number,accounts:Account[],transactions:Transaction[]){
        this.numberFiliale = numberFiliale
        this.transactions = transactions
        this.totalAccounts = accounts
    }

    getTotalAccounts = ():Account[]  => this.totalAccounts //:string e toString
    getTotalTransfer = () => this.transactions

    getAccount = (countNumber:string) => this.totalAccounts.filter(item =>{
        if(item.countNumber === countNumber){
            return item
        } 
    })
    
    addAccount = (namePerson: string,countNumber: string,balance:number):Account => {
        let newAccount = new Account(namePerson,countNumber,balance)
        this.totalAccounts.push(newAccount)
        return newAccount
    }

    removeAccount = (countNumber:string) => delete this.totalAccounts[this.totalAccounts.findIndex(item =>{
        if(item.countNumber === countNumber)
        return item
    })]
    
    generateTransfer = (countSend : string, countReceives : string, moneyTransfer : number):Transaction => {
        let transaction : Transaction = {
            countSend : countSend,
            countReceives : countReceives,
            moneyTransfer : moneyTransfer
        }
        this.totalAccounts.filter(item => {
            if(item.countNumber === countSend){
                item.balance -= moneyTransfer
            }
                item.transfers.push(transaction)
            })
        this.totalAccounts.filter(item => {
            if(item.countNumber === countReceives){
                item.balance += moneyTransfer
            }
                item.transfers.push(transaction)
            })
        this.transactions.push(transaction)
        return transaction
    }
    
    getAccountTransaction = (countNumber:string) => this.totalAccounts.filter(item =>{
        if(item.countNumber === countNumber){
            return item.transfers
        } 
    })
}