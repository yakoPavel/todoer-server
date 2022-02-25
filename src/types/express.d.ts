import { UserType } from "@/components/users";

declare module "express-serve-static-core" {
  export interface Request {
    user: UserType;
  }
}
