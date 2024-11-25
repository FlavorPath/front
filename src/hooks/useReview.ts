import { useAddReview, useUpdateReview } from '@/store/queries/review.query';
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
  initialContent?: string;
  targetId: number;
}

export const useReview = ({ initialContent = '', targetId }: Props) => {
  const params = new URLSearchParams(window.location.search);
  const isUpdate = params.get('type') === 'update';

  const { content, setContent, isFocused } = useTextareaStore();  

  useEffect(() => {
    setContent(initialContent)
  }, [initialContent])

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