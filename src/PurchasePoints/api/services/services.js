import apiClient from "../../../Common/api/apiClient";
import { mapPurchaseDateStringToDate } from "../mappers/mappers";

export const fetchPointsCollection = async () => {
  const response = await apiClient("/api/purchase");
  return mapPurchaseDateStringToDate(response);
};
