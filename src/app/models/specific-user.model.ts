import { Transaction } from "./transaction.model";

export interface SpecificUser
{
  userId: string;

  firstName: string;

  lastName: string;

  email: string;

  balance: number;

  transactions: Transaction[];
}


