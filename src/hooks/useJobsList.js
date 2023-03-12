import { useQuery } from "react-query";
import axios from "axios";

const getJobsList = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/jobs`);
  return data;
};

export default function useJobsList() {
  return useQuery(["jobsList"], () => getJobsList(), {
    refetchInterval: process.env.REACT_APP_REFRESH_INTERVAL || 10000,
  });
}
