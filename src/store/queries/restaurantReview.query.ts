import axiosInstance from "@/api";
import { API_PATH } from "@/api/api-path";
import { queryClient } from "@/utils/queryClient";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";

export type Review = {
  id: number;
  nickname: string;
  profileIcon: string;
  content: string;
  createdAt: string;
};

export type ReviewsResponse = {
  success: boolean;
  reviews: Review[];
  lastCursor: number | null;
};

const deleteReview = async (id: number): Promise<{ success: boolean }> => {
  const url = `/user/review/${id}`;
  const response = await axiosInstance.delete(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
    },
  });
  return response.data;
};

const fetchReviews = async ({
  id,
  cursor = 0,
}: {
  id: number;
  cursor: number | undefined;
}): Promise<ReviewsResponse> => {
  const url = `${API_PATH.restaurant}/${id}/reviews?cursor=${cursor}`;
  const response = await axiosInstance.get(url);
  return response.data;
};

export const useDeleteReview = () => {
  return useMutation<{ success: boolean }, Error, number>({
    mutationFn: deleteReview,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviews"],
      });
    },
    onError: (error) => {
      console.error("리뷰 삭제 실패:", error);
    },
  });
};

export const useInfiniteReviews = (restaurantId: number) => {
  return useInfiniteQuery<ReviewsResponse, Error>({
    queryKey: ["reviews", restaurantId],
    queryFn: ({ pageParam = 0 }) =>
      fetchReviews({ id: restaurantId, cursor: pageParam as number }),
    getNextPageParam: (lastPage) => lastPage.lastCursor || undefined,
    initialPageParam: 0,
    enabled: !!restaurantId,
  });
};
