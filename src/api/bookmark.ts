
import axios from 'axios'

export const fetchGetBookmarks = async () => {
	const response = await axios.get('/scraps')
	return response.data
}

export const removeBookmarks = async (restaurantId: number) => {
	const response = await axios.delete('/scraps', {
    data: { restaurantId },
  });
	return response.data
}