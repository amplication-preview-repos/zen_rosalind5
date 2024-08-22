import { DriverInfo } from "../driverInfo/DriverInfo";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  driverInfos?: Array<DriverInfo>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  phoneNumber: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
