import {Transaction} from './transaction'

export class Account {
    namePerson: string
    countNumber : string
    balance : number
    transfers : Transaction[]

    constructor(namePerson: string,countNumber: string,balance:number, transfers:Transaction[] = []){
        this.namePerson = namePerson,
        this.countNumber = countNumber,
        this.balance = balance
        this.transfers = transfers
    }
    getCountNumber():string{
        return this.countNumber
    }
    getBalance():number{
       return this.balance
    }
    getTransfer():any{
        return this.transfers
    }
}