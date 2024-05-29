import { GetServerSideProps } from 'next';
"use client";
import Header from "@/components/header";
import RandomQuote from '@/components/randomQuote';
import Image from "next/image";
import { createContext, useEffect, useState } from 'react';

const DataContext = createContext({});

export default function Home() {

  const [data, setDataResponse] = useState({})
  useEffect(() => {
    async function getData(){
      const apiEndpoint = `http://localhost:3002/author`;
      const getQuoteData = await fetch(apiEndpoint);
      const data = await getQuoteData.json();
      console.log('Data fetched:', data);
      setDataResponse(data)

    }
    getData();
  }, []
  
  )
  
  return (
    
    <DataContext.Provider value={data}>
      <header>
        <Header />
      
      </header>

      <main>
        <RandomQuote />

      </main>

      </DataContext.Provider>



  )
}
export { DataContext };

