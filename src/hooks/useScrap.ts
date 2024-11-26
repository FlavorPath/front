import { Store } from '@/mocks/mock-data/stores.mock';
import { useDeleteBookmark } from '@/store/queries/bookmarks.query';
import { useLocation, useNavigate } from 'react-router-dom';

export const useScrap = () => {
	const navigate = useNavigate();
	const location = useLocation();
  const isSearching = location.pathname === '/search';

  const { mutate: deleteBookmark } = useDeleteBookmark();

  const clickHandler = (props: Store) => {
    if (isSearching) {
      navigate(`/restaurant/${props.id}`);
    } else {
      navigate(`/restaurant/${props.restaurantId}`);
    }
	};
	
	return {isSearching, deleteBookmark, onClick: clickHandler}
}