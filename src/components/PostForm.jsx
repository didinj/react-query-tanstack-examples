// src/components/PostForm.jsx
import { useState } from "react";

function PostForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>Create a New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
        rows={4}
      />
      <br />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default PostForm;
