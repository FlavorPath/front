import axiosInstance from "@/api";
import { API_PATH } from "@/api/api-path";
import { queryClient } from '@/utils/queryClient';
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

// export const updateScrapeMutation = useMutation({
//   // mutationFn에서 id를 매개변수로 받을 수 있도록 수정
//   mutationFn: (id: number) => updateScrape(id),
//   // 요청이 완료되면 관련 쿼리를 무효화하여 데이터 갱신
//   onSettled: async (_, __, variables) => {
//     // variables에는 mutate 호출 시 넘긴 id가 포함됩니다.
//     await queryClient.invalidateQueries({ queryKey: ["scrape", variables] });
//   },
// });
