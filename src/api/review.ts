import axiosInstance from '.';

export const fetchGetReview = async (reviewId: number) => {
	const response = await axiosInstance.get(`/user/review/${reviewId}`);
	return response.data
}

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