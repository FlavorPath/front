import axios from 'axios'

export const fetchSearchStore = async (searchText: string, isToggleOn: boolean) => {
	let url = '/search'
	url += isToggleOn ? `?label=${searchText}` : `?name=${searchText}`;

	const response = await axios.get(url)
	return response.data;
}