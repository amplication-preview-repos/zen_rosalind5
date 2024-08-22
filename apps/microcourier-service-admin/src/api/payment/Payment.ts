import { DeliveryRequest } from "../deliveryRequest/DeliveryRequest";
import { JsonValue } from "type-fest";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  customer: string | null;
  deliveryRequest?: DeliveryRequest | null;
  id: string;
  paymentMethod: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
};
