import axiosInstance from "@/api";
import { API_PATH } from "@/api/api-path";
import { useQuery } from "@tanstack/react-query";

export type RestaurantDetail = {
  restaurantId: number;
  name: string;
  labels: string[];
  menu: {
    name: string;
    price: string;
    photo_url: string;
  }[];
  address: string;
  hours: string;
  phone: string;
  isScraped: boolean;
};
// export const fetchRestaurantDetail = async (id: number, token: string) => {
//   const url = `${API_PATH.restaurant}/${id}`;
//   const response = await axiosInstance.get(url, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };

export const fetchRestaurantDetail = async (id: number) => {
  const url = `${API_PATH.restaurant}/${id}`;
  const response = await axiosInstance.get(url);
  return response.data;
};

export const useRestaurantDetail = (id: number) => {
  return useQuery<RestaurantDetail>({
    queryKey: ["restaurant", id],
    queryFn: () => fetchRestaurantDetail(id),
    staleTime: 1000 * 60 * 5,
  });
};
