import { useQuery } from "react-query";
import axios from "axios";

const getMessages = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/messages`);
  return data;
};

export default function useMessages() {
  return useQuery(["messages"], () => getMessages(), {
    refetchInterval: process.env.REACT_APP_REFRESH_INTERVAL || 10000,
  });
}
