import axiosInstance from '.';

export const fetchUpdateReview = async (reviewId: number, content: string) => {
	const response = await axiosInstance.put(`/user/review/${reviewId}`, {
    content,
  });
	return response.data;
}

export const fetchAddReview = async (restaurantId: number, content: string) => {
	const response = await axiosInstance.post(`/restaurant/${restaurantId}/reviews`, {
		content
	});
	return response.data;
}