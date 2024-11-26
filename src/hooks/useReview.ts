import { useRestaurantDetail } from '@/store/queries/restaurant.query';
import { useAddReview, useGetReview, useUpdateReview } from '@/store/queries/review.query';
import useTextareaStore from '@/store/stores/textarea.store';
import { useEffect } from 'react';

export interface Review {
  id: number;
  nickname: string;
  profileIcon: string;
  content: string;
  createdAt: string;
}

interface Props {
  targetId: number;
  reviewId: number;
}

export const useReview = ({ targetId, reviewId }: Props) => {
  const { content, isFocused, setContent } = useTextareaStore();

  const { data: restaurant } = useRestaurantDetail(targetId);
  const { data: review } = useGetReview({reviewId});
  const { mutate: updateReview } = useUpdateReview();
  const { mutate: addReview } = useAddReview();


  useEffect(() => {
    setContent(review[0].content);
  }, [review])

  const handleSave = () => {
    if (reviewId) {
      updateReview({
        reviewId,
        content,
      });
    } else {
      addReview({
        restaurantId: targetId,
        content,
      });
    }
    setContent('');
  };

  return {
    isUpdate: !!reviewId,
    restaurant,
    isFocused,
    content,
    onSave: handleSave,
  };
};