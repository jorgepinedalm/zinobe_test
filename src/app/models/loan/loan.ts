import { User } from "../user/user";

export interface Loan {
    value: number;
    dateToPay : string;
    state: boolean;
    isPaid : boolean;
    userId : number;
    user : User;
}
