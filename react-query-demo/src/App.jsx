import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

export default function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 16 }}>
        <h1>React Query Demo (TanStack)</h1>
        <button onClick={() => setShowPosts((s) => !s)}>
          {showPosts ? "Hide" : "Show"} Posts
        </button>
        {showPosts && <PostsComponent />}
      </div>
    </QueryClientProvider>
  );
}