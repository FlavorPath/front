import { fetchAddReview, fetchUpdateReview } from '@/api/review';
import { queryClient } from '@/utils/queryClient';
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom';

export const useAddReview = () => {
	const navigate = useNavigate();

	return useMutation({
    mutationFn: ({ content, restaurantId }: { content: string; restaurantId: number; }) =>
      fetchAddReview(restaurantId, content),
    onSuccess: () => {
      // TODO: 리뷰 목록 조회 api 추가 후 수정 필요함
      queryClient.invalidateQueries({ queryKey: ['get-reviews'] });
      navigate(-1);
    },
  });
}

interface UpdateReviewProps {
	reviewId: number;
	content: string;
}

export const useUpdateReview = () => {
	const navigate = useNavigate();

	return useMutation({
		mutationFn: ({ reviewId, content }: UpdateReviewProps) => fetchUpdateReview(reviewId, content),
		onSuccess: () => {
      // TODO: 리뷰 목록 조회 api 추가 후 수정 필요함
      queryClient.invalidateQueries({ queryKey: ['get-reviews'] });
      navigate(-1)
    }
  });
}