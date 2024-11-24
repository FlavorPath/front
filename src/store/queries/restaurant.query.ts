import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/App";
import axiosInstance from "@/api";
import { API_PATH } from "@/api/api-path";

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
