import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>
        Home
      </h1>
      <Link href="notes/complements-are-useless-in-discovery"><a>Article</a></Link>
    </div>
  )
}
