import { InputJsonValue } from "../../types";
import { PaymentCreateNestedManyWithoutDeliveryRequestsInput } from "./PaymentCreateNestedManyWithoutDeliveryRequestsInput";

export type DeliveryRequestCreateInput = {
  customer?: string | null;
  driver?: string | null;
  dropoffLocation?: InputJsonValue;
  itemDescription?: string | null;
  itemType?: "Option1" | null;
  payments?: PaymentCreateNestedManyWithoutDeliveryRequestsInput;
  pickupLocation?: InputJsonValue;
  status?: "Option1" | null;
};
