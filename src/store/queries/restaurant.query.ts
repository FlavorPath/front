import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/App";
import axiosInstance from "@/api";
import { API_PATH } from "@/api/api-path";

export type MenuItem = {
  name: string;
  price: string;
  photo_url: string;
};

export type RestaurantDetail = {
  restaurantId: number;
  name: string;
  labels: string[];
  images: string[];
  menu: MenuItem[];
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

// JWT 토큰보내줘야 됨.
export const updateScrape = async (id: number) => {
  const url = `${API_PATH.restaurant}/${id}/scrap`;
  const response = await axiosInstance.post(url);
  return response.data;
};

export const fetchRestaurantReviews = async ({
  pageParams,
  id,
}: {
  id: number;
  pageParams: number;
}) => {
  const response = await axiosInstance.get(
    `/restaurant/${id}/reviews?cursor=${pageParams}`
  );
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
  const scrapeMutation = useMutation({
    mutationFn: (id: number) => updateScrape(id),
    onSettled: async () => {
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

export const useRestaurantReviews = (id: number) => {
  return useInfiniteQuery({
    queryKey: ["restaurantReviews", id],
    queryFn: ({ pageParam = 0 }) =>
      fetchRestaurantReviews({ id, pageParams: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.lastCursor,
  });
};
