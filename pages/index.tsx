import type { NextPage } from 'next'
import { ThreeCube } from './ThreeCube'

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-indigo-800'>
      <ThreeCube />
    </div>
  )
}

export default Home
