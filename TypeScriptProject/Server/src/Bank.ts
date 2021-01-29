import {Transaction} from './Transaction'
import {Account} from './Account'
import { uuid } from 'uuidv4'

const banks = require('../Bank.json')

export class Bank{
    branch:string
    treasure:number
    accounts:Account[] = []
    transactions:Transaction[] = []

    constructor( branch:string, treasure:number, accounts:Account[] = [],transactions:Transaction[] = []){
        this.branch = branch, //numero di filiale della banca
        this.treasure = treasure //tesoro della banca
        this.accounts = accounts //account della banca
        this.transactions = transactions //transazioni della banca
    }
    static generateBank = (branch:string, treasure:number,accounts:Account[] = [],transactions:Transaction[] = [])=>{
        let bank = new Bank(branch,treasure,accounts,transactions)
        banks.push(bank)
    }
    static generateAccount = (branchBank: string,namePerson:string,budget:number,IBAN?:string, transactions?:Transaction[]) =>{
        let user : Account = {
            name: namePerson,
            IBAN: IBAN = uuid(),
            budget: budget,
            transactions:transactions = []
        }
        let selected = (banks.reduce((bank: {branch: string}) => bank.branch === branchBank))
        selected.accounts.push(user)
    }
}