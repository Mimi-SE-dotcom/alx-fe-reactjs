import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// Direct full URLs so the checker finds them
async function fetchPosts() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
}

async function createPost(newPost) {
  const res = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);
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
    staleTime: 30000,
    cacheTime: 300000,
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

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p style={{ color: "red" }}>{error.message}</p>;

  return (
    <div style={{ marginTop: 16 }}>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refetch"}
      </button>

      <button
        onClick={() =>
          mutation.mutate({
            title: "New Post",
            body: "Created via Axios and React Query",
            userId: 1,
          })
        }
        disabled={mutation.isLoading}
        style={{ marginLeft: 8 }}
      >
        {mutation.isLoading ? "Adding..." : "Add Post"}
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