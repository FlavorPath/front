import axiosInstance from '.'

export const fetchGetBookmarks = async () => {
	const response = await axiosInstance.get('/scrap');
	return response.data
}

export const removeBookmarks = async (restaurantId: number) => {
	const response = await axiosInstance.delete('/scrap', {
    data: { restaurantId },
  });
	return response.data
}