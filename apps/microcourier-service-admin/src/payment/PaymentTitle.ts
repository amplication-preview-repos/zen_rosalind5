import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "customer";

export const PaymentTitle = (record: TPayment): string => {
  return record.customer?.toString() || String(record.id);
};
