import Card from "@/components/card"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Bobong Blog'
}

export default function Home(){
    return (
        <section className="text-gray-400 body-font overflow-hidden">
            <div className="container xl:py-80 md:py-64 py-40 mx-auto bg-black">
                <div className="flex flex-col text-center w-full mb-20 group justify-center">
                    <span className="group-hover:text-white transition-all duration-500 text-6xl -skew-x-12 -skew-y-12 group-hover:transform-none">Bo</span>
                    <span className="group-hover:text-gray-300 text-grey transition duration-500 text-5xl skew-x-12 skew-y-12 group-hover:transform-none -rotate-[23deg]">INFOSEC</span>
                    <span className="group-hover:text-white transition duration-500 text-6xl -skew-x-12 -skew-y-12 group-hover:transform-none">Blog</span>
                </div>
            </div>
            <div className='w-full mx-auto flex flex-col items-center border-gray-400 sm:mx-3  xl:px-40 md:px-20 '>
              <div>
                <span className='px-10 text-3xl font-bold font-mono'>Recent Post</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-5 m-6 gap-x-12 gap-y-16">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
        </section>
    )
}