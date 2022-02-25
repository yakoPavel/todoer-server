import mongoose from "mongoose";

import { UserType as UserType } from "../types";

const userSchema = new mongoose.Schema<UserType>({
  projects: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
    required: true,
  },
  labels: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Label",
      },
    ],
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
