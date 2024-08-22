import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DriverInfoCreateInput = {
  bankDetails?: InputJsonValue;
  language?: "Option1" | null;
  preferredPostcode?: string | null;
  user?: UserWhereUniqueInput | null;
};
