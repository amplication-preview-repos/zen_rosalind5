import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type DriverInfo = {
  bankDetails: JsonValue;
  createdAt: Date;
  id: string;
  language?: "Option1" | null;
  preferredPostcode: string | null;
  updatedAt: Date;
  user?: User | null;
};
