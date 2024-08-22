import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DriverInfoWhereInput = {
  bankDetails?: JsonFilter;
  id?: StringFilter;
  language?: "Option1";
  preferredPostcode?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
