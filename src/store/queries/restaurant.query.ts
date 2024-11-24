import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/App";
import axiosInstance from "@/api";
import { API_PATH } from "@/api/api-path";

export type MenuItem = {
  name: string; // 메뉴 이름
  price: string; // 가격 (문자열 형식, 예: "13,900원")
  photo_url: string; // 메뉴 이미지 URL
};

export type RestaurantDetail = {
  restaurantId: number; // 식당 ID
  name: string; // 식당 이름
  labels: string[]; // 라벨 배열 (예: ["한식", "돼지고기"])
  images: string[]; // 이미지 URL 배열
  menu: MenuItem[]; // 메뉴 배열
  address: string; // 주소
  hours: string; // 영업 시간
  phone: string; // 전화번호
  isScraped: boolean; // 스크랩 여부
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
  return useQuery({
    queryKey: ["restaurant", id],
    queryFn: () => fetchRestaurantDetail(id),
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
};

export const useSelectedRestaurant = (id: number) => {
  const { data: restaurantDetail, isLoading, error } = useRestaurantDetail(id);

  // Scrape mutation
  const scrapeMutation = useMutation({
    mutationFn: (id: number) => updateScrape(id),
    onSettled: async () => {
      // 무효화하여 데이터 갱신
      await queryClient.invalidateQueries({ queryKey: ["restaurant", id] });
    },
  });

  const handleUpdateScrape = () => {
    if (restaurantDetail) {
      scrapeMutation.mutate(id);
    }
  };

  return {
    restaurantDetail,
    isLoading,
    error,
    handleUpdateScrape,
    isScrapePending: scrapeMutation.isPending,
  };
};
