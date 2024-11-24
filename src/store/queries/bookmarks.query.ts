import { fetchGetBookmarks, removeBookmarks } from '@/api/bookmark'
import { queryClient } from '@/utils/queryClient';
import { useMutation, useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'

export const useGetBookmarks = () => {
	const location = useLocation();
	const isCurrentPage = location.pathname === '/bookmarks'

	return useQuery({
    queryKey: ['get-bookmarks'],
    queryFn: fetchGetBookmarks,
    enabled: !!isCurrentPage,
  });
}

export const useDeleteBookmark = () => {
  return useMutation({
    mutationFn: ({ restaurantId }: { restaurantId: number }) => removeBookmarks(restaurantId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-bookmarks'] });
    },
  });
}