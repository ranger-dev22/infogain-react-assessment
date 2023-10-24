import { useEffect, useState } from "react";
import { fetchPointsCollection } from "../../api/services/services";
import groupElementsByDate from "../../logic/groupElementsByDate/groupElementsByDate";

export const STATUSES = {
  isLoading: "IS_LOADING",
  completed: "COMPLETED",
  error: "ERROR",
};
const useCollectPoints = () => {
  const [data, setData] = useState(null);
  const fetchPurchases = async () => {
    setData({ status: STATUSES.isLoading });
    try {
      const response = await fetchPointsCollection();
      setData({
        status: STATUSES.completed,
        data: groupElementsByDate(response),
      });
    } catch (err) {
      setData({ status: STATUSES.error, data: err });
    }
  };
  useEffect(() => {
    fetchPurchases();
  }, []);

  return {
    data,
  };
};

export default useCollectPoints;
