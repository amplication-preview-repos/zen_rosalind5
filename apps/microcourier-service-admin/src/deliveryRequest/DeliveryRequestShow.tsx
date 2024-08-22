import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DELIVERYREQUEST_TITLE_FIELD } from "./DeliveryRequestTitle";

export const DeliveryRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Customer" source="customer" />
        <TextField label="Driver" source="driver" />
        <TextField label="DropoffLocation" source="dropoffLocation" />
        <TextField label="ID" source="id" />
        <TextField label="ItemDescription" source="itemDescription" />
        <TextField label="ItemType" source="itemType" />
        <TextField label="PickupLocation" source="pickupLocation" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Payment"
          target="deliveryRequestId"
          label="Payments"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
