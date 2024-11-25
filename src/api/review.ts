import axios from 'axios'

export const fetchUpdateReview = async (reviewId: number, content: string) => {
	const response = await axios.put(`/review/${reviewId}`, {
		content
	})
	return response.data;
}

export const fetchAddReview = async (restaurantId: number, content: string) => {
	const response = await axios.post(`/restaurant/${restaurantId}/reviews`, {
		content
	})
	return response.data
}