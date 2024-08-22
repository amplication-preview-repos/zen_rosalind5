import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DriverInfoUpdateInput = {
  bankDetails?: InputJsonValue;
  language?: "Option1" | null;
  preferredPostcode?: string | null;
  user?: UserWhereUniqueInput | null;
};
