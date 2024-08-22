import { InputJsonValue } from "../../types";
import { PaymentUpdateManyWithoutDeliveryRequestsInput } from "./PaymentUpdateManyWithoutDeliveryRequestsInput";

export type DeliveryRequestUpdateInput = {
  customer?: string | null;
  driver?: string | null;
  dropoffLocation?: InputJsonValue;
  itemDescription?: string | null;
  itemType?: "Option1" | null;
  payments?: PaymentUpdateManyWithoutDeliveryRequestsInput;
  pickupLocation?: InputJsonValue;
  status?: "Option1" | null;
};
