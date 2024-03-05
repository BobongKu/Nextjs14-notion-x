import Image from "next/image";
import img from "../public/loading.gif"

export default function Loading() {
    return(
        <div className="flex items-center justify-center min-h-screen p-5 bg-black min-w-screen">
            <Image src={img} alt={"loading"}/>
        </div>
    )
}