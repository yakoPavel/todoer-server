import { User } from "../model/user";

export const createUser = (userId: string) => {
  return new User({
    _id: userId,
    projects: [],
    labels: [],
    createdAt: Date.now(),
  }).save();
};

export const getUserById = async (userId: string) => {
  const user = await User.findById(userId);

  if (!user) return createUser(userId);

  return user;
};
