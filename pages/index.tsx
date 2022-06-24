import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ThreeCube } from './ThreeCube'

const Home: NextPage = () => {
  return (
    <div className='h-screen'>
      <ThreeCube />
    </div>
  )
}

export default Home
