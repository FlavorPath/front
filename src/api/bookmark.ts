import axiosInstance from '.'

interface IResBookmark {
	restaurantId: number;
	name: string;
	label: string;
}

export const getBookmarks = async () => {
	const response = await axiosInstance.get('/scraps');
	return response.data
}