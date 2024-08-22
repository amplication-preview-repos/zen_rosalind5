import { DeliveryRequestWhereUniqueInput } from "../deliveryRequest/DeliveryRequestWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type PaymentUpdateInput = {
  amount?: number | null;
  customer?: string | null;
  deliveryRequest?: DeliveryRequestWhereUniqueInput | null;
  paymentMethod?: InputJsonValue;
  status?: "Option1" | null;
};
