import { DeliveryRequestWhereUniqueInput } from "../deliveryRequest/DeliveryRequestWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type PaymentCreateInput = {
  amount?: number | null;
  customer?: string | null;
  deliveryRequest?: DeliveryRequestWhereUniqueInput | null;
  paymentMethod?: InputJsonValue;
  status?: "Option1" | null;
};
