import { DriverInfoUpdateManyWithoutUsersInput } from "./DriverInfoUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  driverInfos?: DriverInfoUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password?: string;
  phoneNumber?: string | null;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  username?: string;
};
