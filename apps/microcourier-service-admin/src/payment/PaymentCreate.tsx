import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DeliveryRequestTitle } from "../deliveryRequest/DeliveryRequestTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Customer" source="customer" />
        <ReferenceInput
          source="deliveryRequest.id"
          reference="DeliveryRequest"
          label="DeliveryRequest"
        >
          <SelectInput optionText={DeliveryRequestTitle} />
        </ReferenceInput>
        <div />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
