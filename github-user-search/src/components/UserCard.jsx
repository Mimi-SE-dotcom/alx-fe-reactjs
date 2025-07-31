export default function UserCard({ user }) {
  return (
    <div className="p-4 border rounded shadow">
      <img src={user.avatar_url} alt={user.login} className="w-20 rounded-full" />
      <h2 className="text-lg font-bold">{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">View Profile</a>
    </div>
  );
}