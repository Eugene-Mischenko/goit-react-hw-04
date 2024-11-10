import axios from "axios";

const API_KEY = "ock-U_Q-_WxO15fLIrPWpVd_bzscQ3QeZmnxgEkWcd8";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });
  return response.data;
};
