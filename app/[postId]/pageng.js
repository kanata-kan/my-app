import React from 'react';

export default async function pageng({ postId }) {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    },
  );
  const post = await response.json();
  return (
    <div>
      <div
        style={{
          width: '70%',
          marginInline: 'auto',
          background: '#000',
          color: '#fff',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '20px',
          padding: 20,
        }}
      >
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
