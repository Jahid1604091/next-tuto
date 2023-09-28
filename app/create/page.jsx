import Link from 'next/link'
import React from 'react'

export default function Create() {
  return (
    <div>
        <h2 className='text-2xl bg-slate-400 p-5'>This is Create page</h2>
        <Link href='/' className='underline'>Go Home</Link>
    </div>
  )
}
