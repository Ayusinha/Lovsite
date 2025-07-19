import { User } from './User';

export type ItineraryEvent = {
  id: string;
  title: string;
  date: Date;
  location?: string;
  description?: string;
};

export type Expense = {
  id: string;
  amount: number;
  paidBy: User;
  participants: User[];
  description?: string;
};

export class Trip {
  id: string;
  title: string;
  participants: User[];
  events: ItineraryEvent[];
  sharedExpenses: Expense[];

  constructor(data: Trip) {
    this.id = data.id;
    this.title = data.title;
    this.participants = data.participants;
    this.events = data.events;
    this.sharedExpenses = data.sharedExpenses;
  }

  // Example method: add an event
  addEvent(event: ItineraryEvent) {
    this.events.push(event);
  }

  // Example method: add an expense
  addExpense(expense: Expense) {
    this.sharedExpenses.push(expense);
  }
} 