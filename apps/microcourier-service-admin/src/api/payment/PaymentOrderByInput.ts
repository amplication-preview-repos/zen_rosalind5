import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  customer?: SortOrder;
  deliveryRequestId?: SortOrder;
  id?: SortOrder;
  paymentMethod?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
