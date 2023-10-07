import Header from '@/components/header/header'
import React from 'react'
import { useEffect, useState } from "react";
import {useSession, getSession } from "next-auth/react";




const Home = () => {

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
    <div>
   <Header/>
    </div>
  )
}

export default Home
