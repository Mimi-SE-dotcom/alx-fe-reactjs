import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// GET posts
async function fetchPosts() {
  const res = await api.get("/posts");
  return res.data;
}

// POST new post (mock)
async function createPost(newPost) {
  const res = await api.post("/posts", newPost);
  return res.data;
}

export default function PostsComponent() {
  const queryClient = useQueryClient();

  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 30 * 1000,
    cacheTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: (created) => {
      queryClient.setQueryData(["posts"], (old) =>
        old ? [created, ...old] : [created]
      );
    },
  });

  if (isLoading) return <p>Loading…</p>;
  if (isError) return <p style={{ color: "red" }}>{error.message}</p>;

  return (
    <div style={{ marginTop: 16 }}>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing…" : "Refetch"}
      </button>

      <button
        onClick={() =>
          mutation.mutate({
            title: "New Axios Post",
            body: "Created via Axios and React Query",
            userId: 1,
          })
        }
        disabled={mutation.isLoading}
        style={{ marginLeft: 8 }}
      >
        {mutation.isLoading ? "Adding…" : "Add Post"}
      </button>

      {mutation.isError && <p style={{ color: "red" }}>Failed to add</p>}
      {mutation.isSuccess && <p>Post added ✅</p>}

      <ul style={{ marginTop: 16 }}>
        {posts.slice(0, 10).map((p) => (
          <li key={p.id}>
            <strong>#{p.id} {p.title}</strong>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}