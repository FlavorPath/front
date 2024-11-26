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
  limit = 10,
}: {
  cursor?: number;
  limit?: number;
}): Promise<UserReviewsResponse> => {
  const url = `/user/review?cursor=${cursor}&limit=${limit}`;
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
    getNextPageParam: (lastPage) => lastPage.lastCursor || undefined, // 다음 커서 반환
    initialPageParam: 0, // 초기 커서 설정
  });
};
