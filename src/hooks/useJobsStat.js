import { useQuery } from "react-query";
import axios from "axios";

const getJobsStat = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/jobsStat`);
  return data;
};

export default function useJobsStat() {
  return useQuery(["jobsStat"], () => getJobsStat(), {
    refetchInterval: process.env.REACT_APP_REFRESH_INTERVAL || 10000,
  });
}
