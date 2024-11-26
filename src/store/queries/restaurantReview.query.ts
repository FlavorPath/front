import axiosInstance from "@/api";
import { API_PATH } from "@/api/api-path";
import { useInfiniteQuery } from "@tanstack/react-query";

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

// API 호출 함수
const fetchReviews = async ({
  id,
  cursor = 0, // 기본값 설정
}: {
  id: number;
  cursor?: number; // cursor를 선택적 매개변수로 변경
}): Promise<ReviewsResponse> => {
  const url = `${API_PATH.restaurant}/${id}/reviews?cursor=${cursor}`;
  const response = await axiosInstance.get(url);
  return response.data;
};

// 무한 스크롤 쿼리 훅
export const useInfiniteReviews = (restaurantId: number) => {
  return useInfiniteQuery<ReviewsResponse, Error>({
    queryKey: ["reviews", restaurantId],
    queryFn: ({ pageParam = 0 }) =>
      fetchReviews({ id: restaurantId, cursor: pageParam }),
    getNextPageParam: (lastPage) => lastPage.lastCursor || undefined, // 다음 cursor 반환
    initialPageParam: 0, // 초기 cursor 설정
    enabled: !!restaurantId, // restaurantId가 있을 때만 실행
  });
};
