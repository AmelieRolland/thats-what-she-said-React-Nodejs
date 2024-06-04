"use client";
import Image from "next/image";
import style from "./randomQuotes.module.css";
import React, { useContext } from 'react';
import { DataContext } from "@/app/dataContext";


export default function RandomQuote() {
    const { data, fetchNewQuote } = useContext(DataContext);
   

    if (!data) {
        return (
        <div className="text-center">
            <div role="status">
                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div> );
    }
    console.log(data.quote)
    return (
        <section id="quote">
            <div className={`${style.rosefonce}`}>
                <div className={`${style.citation} container mx-auto flex lg:flex-row flex-col`}>
                    <div className="lg:w-2/5 w-full">
                        <div className={style.mneg}>
                            <Image className={`${style.imgautrice} w-full h-auto border p-6`} src={`/${data.img}`} alt="" width={500} height={600} />
                        </div>
                    </div>
                    <div className="lg:w-3/5 w-full flex items-center pl-20">
                        <div className="w-full">
                            <div className="lg:w-1/5 w-full pl-0 lg:pl-5 pt-3 lg:pt-0">
                                <svg width="55" height="43" viewBox="0 0 55 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.88092 38.5355C1.70508 35.1623 0 31.3791 0 25.2463C0 14.4547 7.57575 4.78225 18.5925 0L21.3459 4.24883C11.063 9.81117 9.05267 17.0292 8.251 21.5802C9.90675 20.7231 12.0743 20.424 14.1987 20.6213C19.7611 21.1362 24.1456 25.7027 24.1456 31.3791C24.1456 34.2412 23.0086 36.9861 20.9848 39.0099C18.9609 41.0338 16.216 42.1707 13.3539 42.1707C11.7711 42.1569 10.2069 41.8284 8.75223 41.2043C7.2976 40.5802 5.98162 39.673 4.88092 38.5355ZM35.7142 38.5355C32.5384 35.1623 30.8333 31.3791 30.8333 25.2463C30.8333 14.4547 38.4091 4.78225 49.4258 0L52.1792 4.24883C41.8963 9.81117 39.886 17.0292 39.0843 21.5802C40.7401 20.7231 42.9077 20.424 45.0321 20.6213C50.5944 21.1362 54.9789 25.7027 54.9789 31.3791C54.9789 34.2412 53.8419 36.9861 51.8181 39.0099C49.7943 41.0338 47.0494 42.1707 44.1872 42.1707C42.6044 42.1569 41.0402 41.8284 39.5856 41.2043C38.1309 40.5802 36.815 39.673 35.7142 38.5355Z" fill="#FED3D3" />
                                </svg>
                            </div>
                            <div className="lg:w-4/5 w-full flex flex-col justify-center px-0 lg:px-5">
                                <p className="pl-5 pt-3">{data.quote}</p>
                                <p className="pl-5 pt-5">{data.author_name} {data.author_surname} <em>{data.reference}</em>, {data.author_years}</p>
                                <div className="pl-5 pt-5">
                                    <input className={style.generate} type="button" onClick={fetchNewQuote} value="Générer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
