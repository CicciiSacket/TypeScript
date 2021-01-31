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
    static deleteBank = (branch:string) =>{
        let bank = banks.filter((item: { branch: string }) => item.branch === branch)
        let index = (banks.indexOf(bank[0])) //[0] perchè filter torna un array
        banks.splice(index,1)
    }
    static getTreasure = (branch:string):number => {
        let result = 0
        banks.map((item: { branch: string; treasure: number })=>{
            if(item.branch === branch)
                result = item.treasure
        })
        return result
    }
    static getAccounts = (branch :string) => {
        let bank = banks.filter((item: { branch: string }) => item.branch === branch)
        return bank[0].accounts //[0] perchè filter torna un array
    }
    static generateAccount = (branchBank: string,namePerson:string,budget:number,IBAN?:string, transactions?:Transaction[]) =>{
        let user : Account = {
            name: namePerson,
            IBAN: IBAN = uuid(),
            budget: budget,
            transactions:transactions = []
        }
        let selected = (banks.filter((bank: {branch: string}) => bank.branch === branchBank))
        selected[0].accounts.push(user) //[0] perchè filter torna un array
    }
    static deleteAccount = (branch :string, IBAN:string) =>{
        let bank = banks.filter((item: { branch: string }) => item.branch === branch)
        let singleAccount = (bank[0].accounts.filter((item: { IBAN: string }) => item.IBAN === IBAN))
        let index = bank[0].accounts.indexOf(singleAccount[0])
        bank[0].accounts.splice(index,1)//[0] perchè filter torna un array
    }
    static generateInternalTransfer = (branch :string, IBANsend:string , IBANreceive:string, moneyTransfer:number) => {
        let transaction : Transaction = {
            countSend:IBANsend,
            countReceives:IBANreceive,
            moneyTransfer:moneyTransfer
        }
        let bank = banks.filter((item: { branch: string }) => item.branch === branch)
        bank[0].transactions.push(transaction)
        let sendAccount = (bank[0].accounts.filter((item: { IBAN: string }) => item.IBAN === IBANsend))
        let reciveAccount = (bank[0].accounts.filter((item: { IBAN: string }) => item.IBAN === IBANreceive))
        sendAccount[0].budget -= moneyTransfer
        reciveAccount[0].budget += moneyTransfer
        reciveAccount[0].transactions.push(transaction)
        sendAccount[0].transactions.push(transaction)
    }
    static generateGlobalTransfer = (branchSend :string, branchReceive :string ,IBANsend:string , IBANreceive:string, moneyTransfer:number) => {
        let transaction : Transaction = {
            countSend:IBANsend,
            countReceives:IBANreceive,
            moneyTransfer:moneyTransfer
        }
        let bankSend = banks.filter((item: { branch: string }) => item.branch === branchSend)
        let bankReceive = banks.filter((item: { branch: string }) => item.branch === branchReceive)
        bankSend[0].transactions.push(transaction)
        bankReceive[0].transactions.push(transaction)
        let sendAccount = (bankSend[0].accounts.filter((item: { IBAN: string }) => item.IBAN === IBANsend))
        let reciveAccount = (bankReceive[0].accounts.filter((item: { IBAN: string }) => item.IBAN === IBANreceive))
        let tax =  25
        sendAccount[0].budget -= (moneyTransfer + tax) //!!
        reciveAccount[0].budget += moneyTransfer
        reciveAccount[0].transactions.push(transaction)
        sendAccount[0].transactions.push(transaction)
        bankSend[0].treasure += (tax/2)
        bankReceive[0].treasure += (tax/2) //tutte e due le banche si spattono la tassa che paga chi ha effetuato il bonifico ha pagato 
    }
}

