import axios from "axios";

  axios.defaults.baseURL = "https://pixabay.com/api/";

  export const fetchImagesWithQuery = async (searchQuery, page) => {
    const params = new URLSearchParams({
      key: "25347585-fb6f06c74961a891785be3853",
      q: searchQuery,
      lang: "pl",
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      per_page: 12,
      page,
    });

    const response = await axios.get(`?${params}`);
    return response.data;
  };
