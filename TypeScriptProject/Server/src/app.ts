console.log('exe')
import express, { Response, response } from 'express'
import {Bank} from './Bank'


const app = express()
const bodyParser = require ('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
module.exports = app.listen(3005)

let banks = require('../Bank.json')

app.get('/banks', async (req,res) => { //lista di tutte le banche
    try {
        await res.json({banks:banks})
    } catch (error) {
        await res.json(error)
    }
})

app.post('/banks',async({body:{branch,treasure}},res) => { //inserire una nuova banca in bank.json
    Bank.generateBank(branch,treasure)    
    res.json({banks:banks})
})

app.post('/accounts',async({body:{branchBank,namePerson,budget}},res) => { //inserire un nuovo account in una banca tra quelle di banks.json
    Bank.generateAccount(branchBank,namePerson,budget)    
    res.json({banks:banks})
})




