import React from 'react';

function Post({ post, onToggleVerify }) {
  const randomColor = `hsl(${Math.random() * 360}, 70%, 80%)`;

  return (
    <div
      style={{
        backgroundColor: randomColor,
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '8px'
      }}
    >
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>Status: {post.verifyPost ? '✅ Verified' : '❌ Not Verified'}</p>
      <button onClick={() => onToggleVerify(post.id)}>
        {post.verifyPost ? 'Unverify' : 'Verify'}
      </button>
    </div>
  );
}

export default Post;
