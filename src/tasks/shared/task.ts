import { Document } from 'mongoose';

export class Task extends Document {
  desc: string;
  completed: boolean;
}
