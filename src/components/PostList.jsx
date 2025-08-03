function PostList({ posts }) {
  return (
    <ul style={{ padding: 0 }}>
      {posts.map((post) => (
        <li key={post.id} style={{ marginBottom: "1rem", listStyle: "none" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
