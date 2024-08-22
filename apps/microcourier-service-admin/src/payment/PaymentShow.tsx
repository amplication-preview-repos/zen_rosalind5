import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DELIVERYREQUEST_TITLE_FIELD } from "../deliveryRequest/DeliveryRequestTitle";

export const PaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Customer" source="customer" />
        <ReferenceField
          label="DeliveryRequest"
          source="deliveryrequest.id"
          reference="DeliveryRequest"
        >
          <TextField source={DELIVERYREQUEST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="PaymentMethod" source="paymentMethod" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
