export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance(this.getBalance() + value)
    }
  }

  withdraw = (value: number): number | undefined => {
    if (this.validateStatus()) {
      if (this.getBalance() >= value) {
        return this.balance -= value
      }
      
      throw new Error('Saldo insuficiente')
    }
  }

  getBalance = (): number => {
    return this.balance
  }
  
  setBalance = (balance: number) => {
    this.balance = balance
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
