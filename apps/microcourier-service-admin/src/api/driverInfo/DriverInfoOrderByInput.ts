import { SortOrder } from "../../util/SortOrder";

export type DriverInfoOrderByInput = {
  bankDetails?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  preferredPostcode?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
