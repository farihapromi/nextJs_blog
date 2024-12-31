'use client'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router=useRouter()
  //function use kore naviage
  const naviagte=(name)=>{
    router.push(name)
  }
  console.log(process.env.NODE_ENV)
  return (
    <main className={styles.main}>
     {/* <h2>Basic routing</h2>
     <Link href={'/login'}>Go to login
     </Link>
     <br />
     <button onClick={()=>naviagte('/login')}>Go to login page</button>
     <button onClick={()=>naviagte('/about')}>Go to about page</button> */}
     <Link href='/productlist'>Go To Product paage</Link>
     {
      process.env.NODE_ENV=='development'?
      <h1>You are on development mode</h1>
      :<h1>You are on production mode</h1>
     }
     <h3>Environtment variable</h3>
    </main>
  )
}

