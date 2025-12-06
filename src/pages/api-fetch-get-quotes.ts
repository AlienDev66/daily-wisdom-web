import { useQuery } from "@tanstack/react-query";
import { apiInstance } from "./api";

const fetchQuotes = async () => {
  const response = await apiInstance.get<API.Quotes.SuccessRespose>(`/random`);

  return response?.data;
};

export const useApiFetchQuotes = () => {
  return useQuery({
    queryKey: ["quotes"],
    queryFn: fetchQuotes,
  });
};
