import axiosInstance from '.'

export const fetchGetBookmarks = async () => {
	const response = await axiosInstance.get('/scrap');
	return response.data.data
}

export const removeBookmarks = async (restaurantId: number) => {
	const response = await axiosInstance.post('/scrap', {
    restaurantId,
  });
	return response.data
}