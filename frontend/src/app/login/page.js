'use client'

import Head from 'next/head';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export default function Login() {
    const router = useRouter();
    console.log('router:', router);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const onSubmit = (e) => {
        
        if (email === 'admin@dawn.com' && password === 'admin') {
            console.log('ape');
            e.preventDefault();
                router.push('/bookmark/dashboard');

        } else {
            // Handle the case where credentials are incorrect
            alert('Invalid email or password');
        }
    }
    
    return (
    <>
      <Head>
        <title>Login - DAWN</title>
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
          backgroundColor: '#1a1a1a',
          color: '#f5f5f5',
        }}
      >
        <h1 style={{ fontFamily: 'Splash, cursive', fontSize: '3rem', marginBottom: '2rem' }}>Login</h1>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '300px',
                    }}
                    onSubmit={onSubmit}
        >
          <input
            type="text"
                        placeholder="Username"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
            style={{
              padding: '0.75rem',
              fontSize: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              backgroundColor: '#333',
              color: '#fff',
            }}
          />
          <input
            type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
            style={{
              padding: '0.75rem',
              fontSize: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              backgroundColor: '#333',
              color: '#fff',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.75rem',
              fontSize: '1rem',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#4e54c8',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer',
              textTransform: 'uppercase',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
