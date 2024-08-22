import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeliveryRequestWhereUniqueInput } from "../deliveryRequest/DeliveryRequestWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  customer?: StringNullableFilter;
  deliveryRequest?: DeliveryRequestWhereUniqueInput;
  id?: StringFilter;
  paymentMethod?: JsonFilter;
  status?: "Option1";
};
