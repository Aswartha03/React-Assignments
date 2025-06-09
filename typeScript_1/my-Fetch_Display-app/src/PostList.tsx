import React, { useEffect, useState } from 'react';
import { Post } from './post';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data: Post[] = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Fetched Posts</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.slice(0, 10).map(post => (
          <li key={post.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small>Post ID: {post.id} | User ID: {post.userId}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
