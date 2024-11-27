import axiosInstance from "@/api";
import { useInfiniteQuery } from "@tanstack/react-query";

export type UserReview = {
  id: number;
  restaurant_id: number;
  content: string;
  created_at: string;
  label: string;
};

export type UserReviewsResponse = {
  reviews: UserReview[];
  lastCursor: number | null;
};

const fetchUserReviews = async ({
  cursor = 0,
}: {
  cursor?: number;
  limit?: number;
}): Promise<UserReviewsResponse> => {
  const url = `/user/review?cursor=${cursor}`;
  const response = await axiosInstance.get(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
    },
  });
  return response.data;
};

export const useInfiniteUserReviews = () => {
  return useInfiniteQuery<UserReviewsResponse, Error>({
    queryKey: ["userReviews"],
    queryFn: ({ pageParam = 0 }) => fetchUserReviews({ cursor: pageParam }),
    getNextPageParam: (lastPage) => {
      return lastPage.reviews.length > 0 ? lastPage.lastCursor : null;
    },
    initialPageParam: 0,
  });
};
