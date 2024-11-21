import { useQuery } from "@tanstack/react-query";
import { API_PATH } from "@/api/api-path";
import axiosInstance from "@/api";
const fetchRestaurantDetails = async (id: number) => {
  const url = API_PATH.restaurant.replace(":id", id.toString());
  const response = await axiosInstance.get(url);
  return response.data;
};
export const useRestaurantDetails = (id: number) => {
  return useQuery({
    queryKey: ["restaurant", id],
    queryFn: () => fetchRestaurantDetails(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
