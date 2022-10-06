import { API_URL, API_KEY, HASH, timestamp } from "./api";

const options = {
  method: "GET",
};

export const getCharacters = async (limit) => {
  try {
    const response = await fetch(
      `${API_URL}characters?limit=${limit}&ts=${timestamp}&apikey=${API_KEY}&hash=${HASH}`,
      options
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    return [];
  }
};
