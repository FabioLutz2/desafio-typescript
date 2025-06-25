import { DioAccount } from "./DioAccount";

export class VipAccount extends DioAccount {  
  deposit = (value: number): number | undefined => {
    if (this.validateStatus()) {
      return this.balance += value + 10
    }
  }
}