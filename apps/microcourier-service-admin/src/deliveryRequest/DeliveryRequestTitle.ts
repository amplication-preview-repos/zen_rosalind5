import { DeliveryRequest as TDeliveryRequest } from "../api/deliveryRequest/DeliveryRequest";

export const DELIVERYREQUEST_TITLE_FIELD = "customer";

export const DeliveryRequestTitle = (record: TDeliveryRequest): string => {
  return record.customer?.toString() || String(record.id);
};
