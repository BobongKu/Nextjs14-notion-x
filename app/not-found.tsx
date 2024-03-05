import Image from "next/image";
import img from "../public/error.gif"


export default function Error() {
    return(
        <>
        <div className="flex items-center justify-center min-h-screen p-5 bg-black min-w-screen">
            <Image src={img} alt={"error"}/>
        </div>
        </>
    )
}