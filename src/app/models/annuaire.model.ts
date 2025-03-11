import { Job } from "./Job";

export interface Annuaire {
  id: number;
  firstName: string;
  lastName: string;
  birthday: Date;
  email: string;
  job: Job;
}
