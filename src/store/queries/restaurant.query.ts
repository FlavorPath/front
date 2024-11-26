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

const getTokenFromLocalStorage = () => {
  const authStorage = localStorage.getItem("auth-storage");
  if (!authStorage) return "";
  try {
    const parsed = JSON.parse(authStorage);
    return parsed.state?.accessToken || "";
  } catch (error) {
    console.error("Failed to parse auth-storage:", error);
    return "";
  }
};

export const fetchRestaurantDetail = async (id: number, token: string) => {
  const url = `${API_PATH.restaurant}/${id}`;

  const response = await axiosInstance.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateScrape = async (id: number, token: string) => {
  const url = `${API_PATH.restaurant}/${id}/scrap`;
  const response = await axiosInstance.post(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("response " + response);
  return response.data;
};

export const useRestaurantDetail = (id: number) => {
  const token = getTokenFromLocalStorage();
  return useQuery<RestaurantDetail>({
    queryKey: ["restaurant", id],
    queryFn: () => fetchRestaurantDetail(id, token),
    staleTime: 1000 * 60 * 5,
    enabled: !!id && !!token, // id와 token이 있을 때만 실행
  });
};

export const useUpdateScrapeMutation = () => {
  const token = getTokenFromLocalStorage();
  return useMutation({
    mutationFn: (id: number) => updateScrape(id, token),
    onSettled: async (_, __, variables) => {
      await queryClient.invalidateQueries({
        queryKey: ["restaurant", variables],
      });
    },
  });
};
