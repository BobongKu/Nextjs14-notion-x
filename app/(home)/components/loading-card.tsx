import Image from "next/image";
import img from "../../../public/image.png"

export default function LoadingCard() {
    return(
        <>
        <div className='flex items-center justify-center transition'>
                <div className=' mx-auto rounded-2xl shadow-xl'>
                    <div className="grid rounded-2xl max-w-[300px] max-h-[390px] shadow-sm bg-newgray flex-col">
                <Image
                    src={img}
                    width="375"
                    height="100"
                    className="rounded-t-xl justify-center grid h-40 object-cover"
                    alt="movie.title"
                    />
                            <div className="group py-2 px-3 grid z-10">
                                <span className="py-2 font-bold sm:text-md line-clamp-1 text-white">...</span>
                            <div>
                                <span className="line-clamp-1 text-sm leading-relaxed text-gray-300 font-bold">...</span>
                            </div>
                            <div className="flex py-1">
                                <span className="px-1 mr-2 text-gray bg-black bg-opacity-30 rounded-md text-xs md:text-sm">...</span>
                            </div>
                        </div>
                            <div className="border-t border-linegray p-1">
                                <span className="text-xs text-gray-400 px-3">0000.00.00</span>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}