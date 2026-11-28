import { redirect } from "next/navigation";

export default async function  dashboard() {
        const islogged=false;

       return (
            !islogged?redirect("/login"):<h1>This is dashboard</h1>
       )
}