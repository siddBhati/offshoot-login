import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header/header'
import { useEffect, useState } from "react";
import {useSession, getSession } from "next-auth/react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const {session,status}=useSession()
  useEffect(() => {

    getSession().then((session) => {
      setIsLoading(false);
      if (!session) {
        window.location.href = "/signin";
      }
    });
  },[]);
  if (status==="loading") {
   return <p >loading...</p>;
 }
 if(status==='authenticated')return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          Home
        </div>
      </main>
    </>
  )
}