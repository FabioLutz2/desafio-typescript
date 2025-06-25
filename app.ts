import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipAccount } from './class/VipAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(550)
console.log(peopleAccount)
peopleAccount.withdraw(200)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(140)
console.log(companyAccount)
companyAccount.withdraw(50)
console.log(companyAccount)
companyAccount.getLoan(1000)
console.log(companyAccount)

const vipAccount: VipAccount = new VipAccount('VIP', 30)
console.log(vipAccount)
vipAccount.deposit(100)
console.log(vipAccount)
