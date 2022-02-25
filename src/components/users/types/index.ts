import { Schema } from "mongoose";

export type UserType = {
  _id: string;
  projects: Schema.Types.ObjectId[]; // TODO: Set the actual types in the generic
  labels: Schema.Types.ObjectId[];
  createdAt: number;
};
