import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const headers = token ? {
  Authorization: `token ${token}`,
} : {};

export const fetchGitHubUser = async (username) => {
  const response = await axios.get(`${BASE_URL}${username}`, { headers });
  return response.data;
};