import { API_PATH } from "@/api/api-path";
import { queryClient } from "@/utils/queryClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

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

export const fetchRestaurantDetail = async (id: number, token: string) => {
  const url = `${API_PATH.restaurant}/${id}`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateScrape = async (id: number, token: string) => {
  const url = `${API_PATH.restaurant}/${id}/scrap`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// 이 부분 오류 처리 더 해결해야됨.
const getTokenFromLocalStorage = () => {
  const authStorage = localStorage.getItem("auth-storage");
  if (!authStorage) return "";
  try {
    const parsed = JSON.parse(authStorage);
    return parsed.state?.accessToken || "";
  } catch (error) {
    console.error("토큰 못 불러옴:", error);
    return "";
  }
};

export const useRestaurantDetail = (id: number) => {
  const token = getTokenFromLocalStorage();
  return useQuery<RestaurantDetail>({
    queryKey: ["restaurant", id],
    queryFn: () => fetchRestaurantDetail(id, token),
    staleTime: 1000 * 60 * 5,
    enabled: !!id && !!token,
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
