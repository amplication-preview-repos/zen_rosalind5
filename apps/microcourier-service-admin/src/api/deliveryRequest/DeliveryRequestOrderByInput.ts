import { SortOrder } from "../../util/SortOrder";

export type DeliveryRequestOrderByInput = {
  createdAt?: SortOrder;
  customer?: SortOrder;
  driver?: SortOrder;
  dropoffLocation?: SortOrder;
  id?: SortOrder;
  itemDescription?: SortOrder;
  itemType?: SortOrder;
  pickupLocation?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
