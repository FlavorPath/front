import { fetchAddReview, fetchGetReview, fetchUpdateReview } from '@/api/review';
import { queryClient } from '@/utils/queryClient';
import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom';

export const useAddReview = ({restaurantId}: { restaurantId : number}) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ content, restaurantId }: { content: string; restaurantId: number }) =>
      fetchAddReview(restaurantId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-reviews'] });
      navigate(`/restaurant/${restaurantId}/review`);
    },
  });
};

interface UpdateReviewProps {
	reviewId: number;
	content: string;
}

export const useUpdateReview = ({ restaurantId }: { restaurantId: number }) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ reviewId, content }: UpdateReviewProps) => fetchUpdateReview(reviewId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-reviews'] });
      navigate(`/restaurant/${restaurantId}/review`);
    },
  });
};

interface GetReviewProps {
  reviewId: number
}

export const useGetReview = ({ reviewId }: GetReviewProps) => {
  return useQuery({
    queryKey: ['review'],
    queryFn: () => fetchGetReview(reviewId),
    enabled: !!reviewId
  });
};