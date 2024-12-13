'use client';
import React, { useState } from 'react';
import styles from './styles.module.css'; 

function Create() {
  const [bookmark, setBookmark] = useState('');

  const handleAddBookmark = () => {
    if (bookmark.trim() !== '') {
      alert(`New bookmark added: ${bookmark}`);
      setBookmark(''); 
    }
  };


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add a New Bookmark</h1>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter your bookmark"
        value={bookmark}
        onChange={(e) => setBookmark(e.target.value)}
      />
      <button className={styles.button} onClick={handleAddBookmark}>
        Add new Bookmark
      </button>
    </div>
  );
}

export default Create;
