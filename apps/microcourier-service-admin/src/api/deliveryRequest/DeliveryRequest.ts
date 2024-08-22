import { JsonValue } from "type-fest";
import { Payment } from "../payment/Payment";

export type DeliveryRequest = {
  createdAt: Date;
  customer: string | null;
  driver: string | null;
  dropoffLocation: JsonValue;
  id: string;
  itemDescription: string | null;
  itemType?: "Option1" | null;
  payments?: Array<Payment>;
  pickupLocation: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
};
