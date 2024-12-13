'use client'
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Splash&display=swap" rel="stylesheet" />
      </Head>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
          background:'#1a1a1a'
        }}
      >
        <h1 style={{ fontSize: '10rem', marginBottom: '2rem', color: '#eeeeee', fontFamily: 'Splash, cursive' }}>DAWN</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              cursor: 'pointer',
              color: '#fff',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              background: '#1a1a1a',
              border:'1px solid #1a1a1a',
            }}
          >
            <Link href="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
              Login
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
