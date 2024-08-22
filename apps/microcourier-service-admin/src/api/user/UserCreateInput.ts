import { DriverInfoCreateNestedManyWithoutUsersInput } from "./DriverInfoCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  driverInfos?: DriverInfoCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password: string;
  phoneNumber?: string | null;
  role?: "Option1" | null;
  roles: InputJsonValue;
  username: string;
};
