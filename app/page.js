import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return <div>
    <h2 className='text-3xl'>Home Page</h2>
    <Link className='btn bg-slate-500 p-2 rounded-xl text-white my-2' href='/create'>+Create New</Link>
    <Link className='' href='/about'>About</Link>
  </div>
}
