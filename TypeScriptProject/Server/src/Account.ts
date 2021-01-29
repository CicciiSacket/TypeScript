import {Transaction} from './Transaction'

export interface Account {
    name: string, //name proprietario conto
    IBAN: string, //iban del conto
    budget: number, //budget conto 
    transactions:Transaction[] //transazioni del conto
}
