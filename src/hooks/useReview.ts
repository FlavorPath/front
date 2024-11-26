import { useAddReview, useUpdateReview } from '@/store/queries/review.query';
import useTextareaStore from '@/store/stores/textarea.store';

export interface Review {
  id: number;
  nickname: string;
  profileIcon: string;
  content: string;
  createdAt: string;
}

interface Props {
  targetId: number;
}

export const useReview = ({  targetId }: Props) => {
  const params = new URLSearchParams(window.location.search);
  const isUpdate = params.get('type') === 'update';

  const { content, isFocused } = useTextareaStore();  
  const { mutate: updateReview } = useUpdateReview();
  const { mutate: addReview } = useAddReview();

  const handleSave = () => {
    if (isUpdate) {
      updateReview({
        reviewId: targetId,
        content,
      });
    } else {
      addReview({
        restaurantId: targetId,
        content,
      });
    }
  };

  return {
    isUpdate,
    isFocused,
    content,
    onSave: handleSave,
  };
};