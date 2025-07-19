import { User } from './User';

export type Milestone = {
  title: string;
  date: Date;
};

export class Couple {
  id: string;
  partnerA: User;
  partnerB: User;
  anniversary: Date;
  milestones: Milestone[];

  constructor(data: Couple) {
    this.id = data.id;
    this.partnerA = data.partnerA;
    this.partnerB = data.partnerB;
    this.anniversary = new Date(data.anniversary);
    this.milestones = data.milestones;
  }

  // Example method: add a milestone
  addMilestone(milestone: Milestone) {
    this.milestones.push(milestone);
  }
} 