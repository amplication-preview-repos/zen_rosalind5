import { DriverInfo as TDriverInfo } from "../api/driverInfo/DriverInfo";

export const DRIVERINFO_TITLE_FIELD = "preferredPostcode";

export const DriverInfoTitle = (record: TDriverInfo): string => {
  return record.preferredPostcode?.toString() || String(record.id);
};
