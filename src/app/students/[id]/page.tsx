"use client"

import { useParams } from "next/navigation";

export default async function app() {
        const paras=useParams();

        const id=paras.id;
       
        
        return(
            <>
            <h2>{id}</h2>
           
            </>
        )
}