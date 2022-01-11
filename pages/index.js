import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './Navbar';
import Hero from './Hero';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Hero/>
    </div>
  )
}
