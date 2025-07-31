import { useState } from "react";
import SearchInput from "./components/SearchInput";
import UserCard from "./components/UserCard";
import { fetchGitHubUser } from "./services/githubAPI";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    try {
      const data = await fetchGitHubUser(username);
      setUser(data);
      setError(null);
    } catch (err) {
      setUser(null);
      setError("User not found");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <SearchInput onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;