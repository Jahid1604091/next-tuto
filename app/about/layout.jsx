import React from 'react'
import styles from './styles.module.css';
export default function AboutLayout({children}) {
  return (
    <main className={styles.main}>
        <h3 className='text-2xl bg-slate-800 p-2'>About Page</h3>
        {children}
    </main>
  )
}
