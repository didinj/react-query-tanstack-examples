import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPosts, createPost } from "./api/posts";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = useQueryClient();

  const {
    data: posts,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts
  });

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      // Invalidate and refetch the posts query
      queryClient.invalidateQueries(["posts"]);
    }
  });

  const handleAddPost = (newPost) => {
    mutation.mutate(newPost);
  };

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>React Query CRUD</h1>
      <PostForm onAdd={handleAddPost} />
      {mutation.isPending && <p>Creating post...</p>}
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
      {mutation.isSuccess && <p>Post created!</p>}
      <PostList posts={posts} />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
