import { User } from "./user";

export interface Loan {
    value: number;
    dateToPay : string;
    state: boolean;
    isPaid : boolean;
    user? : User;
}
