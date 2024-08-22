import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type DeliveryRequestWhereInput = {
  customer?: StringNullableFilter;
  driver?: StringNullableFilter;
  dropoffLocation?: JsonFilter;
  id?: StringFilter;
  itemDescription?: StringNullableFilter;
  itemType?: "Option1";
  payments?: PaymentListRelationFilter;
  pickupLocation?: JsonFilter;
  status?: "Option1";
};
