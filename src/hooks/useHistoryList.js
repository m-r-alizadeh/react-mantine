import { useQuery } from "react-query";
import axios from "axios";

const getHistoryList = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/history`);
  return data;
};

export default function useHistoryList() {
  return useQuery(["HistoryList"], () => getHistoryList(), {
    refetchInterval: process.env.REACT_APP_REFRESH_INTERVAL || 10000,
  });
}
