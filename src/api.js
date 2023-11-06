import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

export const fetchImages = async (searchQuery, page = 1) => {
	const params = new URLSearchParams({
		key: "40349603-a69e9bba39d2f9bc1a4bb4dfc",
		q: searchQuery,
		image_type: "photo",
		orientation: "horizontal",
		safesearch: true,
		page,
		per_page: 12,
	});
	const response = await axios.get(`?${params}`);
	return response.data;
};