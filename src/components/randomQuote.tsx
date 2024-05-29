import Image from "next/image"
import style from "./randomQuotes.module.css"
import React, { useContext } from 'react';
import { DataContext } from "@/app/page"; 

export default function RandomQuote() {
    const data = useContext(DataContext);

    return(
    <section id="quote">

        <div className={`${style.rosefonce}`}>

            <div className={`${style.citation} container mx-auto flex lg:flex-row flex-col`}>
                <div className="lg:w-2/5 w-full">
                    <div className={style.mneg}>
                        <img/>
                        <Image className={`${style.imgautrice} w-full h-auto border p-6`} src={`/${data.img}`} alt="" width={500} height={600}/>
                    </div>
                </div>

                <div className="lg:w-3/5 w-full flex items-center">
                    <div className="w-full">
                        
                        <div className="lg:w-1/5 w-full pl-0 lg:pl-5 pt-3 lg:pt-0">
                            <svg width="55" height="43" viewBox="0 0 55 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.88092 38.5355C1.70508 35.1623 0 31.3791 0 25.2463C0 14.4547 7.57575 4.78225 18.5925 0L21.3459 4.24883C11.063 9.81117 9.05267 17.0292 8.251 21.5802C9.90675 20.7231 12.0743 20.424 14.1987 20.6213C19.7611 21.1362 24.1456 25.7027 24.1456 31.3791C24.1456 34.2412 23.0086 36.9861 20.9848 39.0099C18.9609 41.0338 16.216 42.1707 13.3539 42.1707C11.7711 42.1569 10.2069 41.8284 8.75223 41.2043C7.2976 40.5802 5.98162 39.673 4.88092 38.5355ZM35.7142 38.5355C32.5384 35.1623 30.8333 31.3791 30.8333 25.2463C30.8333 14.4547 38.4091 4.78225 49.4258 0L52.1792 4.24883C41.8963 9.81117 39.886 17.0292 39.0843 21.5802C40.7401 20.7231 42.9077 20.424 45.0321 20.6213C50.5944 21.1362 54.9789 25.7027 54.9789 31.3791C54.9789 34.2412 53.8419 36.9861 51.8181 39.0099C49.7943 41.0338 47.0494 42.1707 44.1872 42.1707C42.6044 42.1569 41.0402 41.8284 39.5856 41.2043C38.1309 40.5802 36.815 39.673 35.7142 38.5355Z" fill="#FED3D3"/>
                            </svg>
                        </div>
                        <div className="lg:w-4/5 w-full flex flex-col justify-center px-0 lg:px-5">
                            <p className="pl-5 pt-3">{data.quote}</p>
                            {/* </p> */}
                            <p className="pl-5">{data.author_name} {data.author_surname} <em>{data.reference}</em>, {data.dates}</p>
                            <div className="pl-5"><input className="generate" type="button" OnClick="javascript:window.location.reload()" value="Générer"/></div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </section>
    )
}