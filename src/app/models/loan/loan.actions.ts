import { Loan } from "./loan";

export class AddLoan {
    static readonly type = "[LOANS] Add";
    constructor(public payload : Loan){}
}
