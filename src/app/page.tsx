"use client";
import Header from "@/components/header";
import RandomQuote from '@/components/randomQuote';
import WhoIsShe from '@/components/whoIsShe';
import { DataContext, QuoteData } from "./dataContext";
import { useEffect, useState } from 'react';



export default function Home() {
  const [data, setDataResponse] = useState<QuoteData | null>(null);

  const fetchNewQuote = async () => {
    const apiEndpoint = `http://localhost:3002/author`;
    try {
      const getQuoteData = await fetch(apiEndpoint);
      if (!getQuoteData.ok) {
        throw new Error("Chargement des données impossible :( ");
      }
      const { data } = await getQuoteData.json();
      setDataResponse(data);
    } catch (error) {
      console.error("Chargement des données impossible :( ", error);
    }
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);

  return (
    <DataContext.Provider value={{ data, fetchNewQuote }}>
      <header>
        <Header />
      </header>
      <main>
        <RandomQuote />
        <WhoIsShe />
      </main>
    </DataContext.Provider>
  );
}


