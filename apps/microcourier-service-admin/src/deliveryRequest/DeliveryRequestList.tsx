import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DeliveryRequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DeliveryRequests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
