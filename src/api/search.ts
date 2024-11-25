import axiosInstance from '.';

export const fetchSearchStore = async (searchText: string, isToggleOn: boolean) => {
  const url = `/search?toggle=${isToggleOn ? 'label' : 'name'}&query=${encodeURIComponent(searchText)}`;

	const response = await axiosInstance.get(url);
  return response.data;
};