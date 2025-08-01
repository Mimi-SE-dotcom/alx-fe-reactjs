import axios from "axios";

export async function searchUsers({ username, location, minRepos }) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);

  // You can also return response.data.items if needed
  return response.data.items;
}