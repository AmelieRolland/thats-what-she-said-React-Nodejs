import React, { createContext, useState } from 'react';


export interface QuoteData {
    img: string;
    quote: string;
    author_name: string;
    author_surname: string;
    reference: string;
    author_years: string;
    author_bio: string;
  }
export const DataContext = createContext<{ data: QuoteData | null, fetchNewQuote: () => void }>({
    data: null,
    fetchNewQuote: () => {},
  });