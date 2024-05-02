import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();
  const post = posts.map(item => {
    return (
      <Link key={item.id} href={`/${item.id}`}>
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
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      </Link>
    );
  });

  return <main>{post}</main>;
}
