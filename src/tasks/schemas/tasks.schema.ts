import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  desc: String,
  completed: Boolean
});