console.log('exe')
import express, { Response, response } from 'express'
import {Bank} from './Bank'

const app = express()
const bodyParser = require ('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
module.exports = app.listen(3005)

let banks = require('../Bank.json')
app.get('/banks', async (req,res) => { //lista di tutte le banche OK!
    await res.json({banks:banks})
})
app.get('/banks/:branch/treasure', async({params:{branch}},res) => { //tesoro di una determinata banca OK!
    await res.json(Bank.getTreasure(branch))
})
app.post('/banks',async({body:{branch,treasure}},res) => { //inserire una nuova banca OK!
    Bank.generateBank(branch,treasure)    
    await res.json({banks:banks})
})
app.delete('/banks', async({body:{branch}},res)=> { //rimozione banca dalla lista OK!
    Bank.deleteBank(branch)
    await res.json({banks:banks})
})
app.get('/banks/:branch/accounts', async({params:{branch}},res)=> { //tutti gli account di una banca OK!
    await res.json(Bank.getAccounts(branch))
})
app.post('/banks/:branch/accounts',async({params:{branch},body:{namePerson,budget}},res) => { //inserire un nuovo account in una banca OK!
    Bank.generateAccount(branch,namePerson,budget)    
    await res.json({banks:banks})
})
app.delete('/banks/:branch/accounts',async({params:{branch},body:{IBAN}},res) => { //eliminare account da una banca OK!
    Bank.deleteAccount(branch,IBAN)
    await res.json(Bank.getAccounts(branch))
})
app.post('/banks/:branch/transfers',async({params:{branch},body:{IBANsends,IBANreceive,moneyTransfer}},res) => { //trasferimento denaro da due conti della stessa banca OK!
    Bank.generateInternalTransfer(branch,IBANsends,IBANreceive,moneyTransfer)    
    await res.json(Bank.getAccounts(branch))
})
app.post('/banks/:branchsend/transfers/:branchreceive',async({params:{branchsend,branchreceive},body:{IBANsends,IBANreceive,moneyTransfer}},res) => { //trasferimento denaro da due conti di banche diverse OK!
    Bank.generateGlobalTransfer(branchsend,branchreceive,IBANsends,IBANreceive,moneyTransfer)    
    await res.json({banks:banks})
})