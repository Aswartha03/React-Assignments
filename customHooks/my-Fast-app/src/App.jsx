import React, { useState, useEffect } from 'react';
import Post from './components/Post';

function App() {
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const addPost = () => {
    if (title.trim() && body.trim()) {
      const newPost = {
        id: Date.now(),
        title,
        body,
        verifyPost: false,
      };
      setPosts([...posts, newPost]);
      setTitle('');
      setBody('');
    }
  };

  const toggleVerify = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, verifyPost: !post.verifyPost } : post
    ));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Timer: {timer}s</h1>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter body"
        value={body}
        onChange={e => setBody(e.target.value)}
      />
      <br />
      <button onClick={addPost}>Add Post</button>

      <div style={{ marginTop: '20px' }}>
        {posts.map(post => (
          <Post key={post.id} post={post} onToggleVerify={toggleVerify} />
        ))}
      </div>
    </div>
  );
}

export default App;
