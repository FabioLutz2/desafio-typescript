import { DioAccount } from "./DioAccount";

export class VipAccount extends DioAccount {  
  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance(this.getBalance() + value + 10)
    }
  }
}