import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DeliveryRequestTitle } from "../deliveryRequest/DeliveryRequestTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
