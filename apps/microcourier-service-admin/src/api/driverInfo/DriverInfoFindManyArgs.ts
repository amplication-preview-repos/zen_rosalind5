import { DriverInfoWhereInput } from "./DriverInfoWhereInput";
import { DriverInfoOrderByInput } from "./DriverInfoOrderByInput";

export type DriverInfoFindManyArgs = {
  where?: DriverInfoWhereInput;
  orderBy?: Array<DriverInfoOrderByInput>;
  skip?: number;
  take?: number;
};
