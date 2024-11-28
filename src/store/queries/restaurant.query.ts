import axiosInstance from "@/api";
import { API_PATH } from "@/api/api-path";
import { queryClient } from "@/utils/queryClient";
import { useMutation, useQuery } from "@tanstack/react-query";

export type RestaurantDetail = {
  restaurantId: number;
  name: string;
  labels: string[];
  images: string[];
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

export const fetchRestaurantDetail = async (id: number) => {
  const url = `${API_PATH.restaurant}/${id}`;
  const response = await axiosInstance.get(url);
  return response.data;
};

export const updateScrape = async (id: number) => {
  const url = `${API_PATH.restaurant}/${id}/scrap`;
  const response = await axiosInstance.post(url);
  return response.data;
};

export const useRestaurantDetail = (id: number) => {
  return useQuery<RestaurantDetail>({
    queryKey: ["restaurant", id],
    queryFn: () => fetchRestaurantDetail(id),
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
};

export const useUpdateScrapeMutation = () => {
  return useMutation({
    mutationFn: (id: number) => updateScrape(id),
    onSettled: async (_, __, variables) => {
      await queryClient.invalidateQueries({
        queryKey: ["restaurant", variables],
      });
    },
  });
};
