import { fetchGetBookmarks, removeBookmarks } from '@/api/bookmark'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
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
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: ({ restaurantId }: { restaurantId: number }) => removeBookmarks(restaurantId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-bookmarks'] });
    },
  });
}