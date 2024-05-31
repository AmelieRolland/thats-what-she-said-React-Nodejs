"use client";
import Header from "@/components/header";
import RandomQuote from '@/components/randomQuote';
import WhoIsShe from '@/components/whoIsShe';
import { createContext, useEffect, useState } from 'react';

interface QuoteData {
  img: string;
  quote: string;
  author_name: string;
  author_surname: string;
  reference: string;
  author_years: string;
  author_bio: string;
}

const DataContext = createContext<{ data: QuoteData | null, fetchNewQuote: () => void }>({
  data: null,
  fetchNewQuote: () => {},
});

export default function Home() {
  const [data, setDataResponse] = useState<QuoteData | null>(null);

  const fetchNewQuote = async () => {
    const apiEndpoint = `http://localhost:3002/author`;
    const getQuoteData = await fetch(apiEndpoint);
    const newData = await getQuoteData.json();
    setDataResponse(newData);
  }

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

export { DataContext };

