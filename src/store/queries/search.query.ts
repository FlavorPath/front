import { fetchSearchStore } from '@/api/search';
import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom';

export const useGetSearchStores = ({ searchText, isToggleOn }: { searchText: string, isToggleOn: boolean }) => {
  const location = useLocation();
  const isCurrentPage = location.pathname === '/search';

  return useQuery({
    queryKey: ['search-store', isToggleOn ? 'label' : 'name'],
    queryFn: () => fetchSearchStore(searchText, isToggleOn),
    enabled: !!isCurrentPage && !!searchText,
  });
};