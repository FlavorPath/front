import axiosInstance from "@/api";
import { useInfiniteQuery } from "@tanstack/react-query";

export type UserReview = {
  id: number;
  restaurant_id: number;
  content: string;
  created_at: string;
  label: "한식" | "디저트" | "중식" | "양식" | "일식";
  restaurant_name: string;
};

export type UserReviewsResponse = {
  reviews: UserReview[];
  lastCursor: number | null;
  success?: boolean;
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

// export const useInfiniteUserReviews = () => {
//   return useInfiniteQuery<UserReviewsResponse, Error>({
//     queryKey: ["userReviews"],
//     queryFn: ({ pageParam = 0 }) => fetchUserReviews({ cursor: pageParam }),
//     getNextPageParam: (lastPage) => lastPage.lastCursor || undefined,
//     initialPageParam: 0,
//   });
// };

export const useInfiniteUserReviews = () => {
  return useInfiniteQuery<UserReviewsResponse, Error>({
    queryKey: ["userReviews"],
    queryFn: ({ pageParam = 0 }) => fetchUserReviews({ cursor: pageParam }),
    getNextPageParam: (lastPage) => {
      if (lastPage.success || lastPage.lastCursor === null) {
        return undefined;
      }
      return lastPage.lastCursor;
    },
    initialPageParam: 0,
  });
};
