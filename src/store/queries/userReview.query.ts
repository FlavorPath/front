import axiosInstance from "@/api";
import { useInfiniteQuery } from "@tanstack/react-query";

export type UserReview = {
  id: number;
  restaurant_id: number;
  content: string;
  created_at: string;
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
      // lastCursor가 null이면 undefined 반환 (더 이상 페이지 없음)
      return lastPage.lastCursor !== null ? lastPage.lastCursor : undefined;
    },
    initialPageParam: 0,
  });
};
