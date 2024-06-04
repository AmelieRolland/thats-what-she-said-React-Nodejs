"use client";
import style from "./whoIsShe.module.css"
import React, { useContext } from 'react'
import { DataContext } from "@/app/dataContext";

export default function WhoIsShe(){
    const { data } = useContext(DataContext);
    console.log(data)

    return (
        <section> 
            <div className="container mx-auto py-5">
                
                <div className="lg:pl-5 pb-5">
                    <h2 className="font-bold text-4xl py-10"><span className={style.strong}>Who is she?</span></h2>
                </div>
                <div className={`${style.bio} lg:w-8/12 lg:pl-5 mb-5`}>
                    
                        {data && (
                            <p>{data.author_bio}</p>
                        )}
                    
                </div>
            </div>
        </section>
    )
}
