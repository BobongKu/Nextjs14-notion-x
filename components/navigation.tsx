import Link from "next/link";

export default function Navigation(){
    return(
        <nav className="text-white sticky top-0 backdrop-blur-sm bg-opacity-10 bg-gray-100 z-10">
            <div className="container m-auto px-2 md:px-12 lg:px-20">
                <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-3 md:gap-0 relative">
                    <input type="checkbox" name="toggle_nav" id="toggle_nav" className="hidden peer"/>
                    <div className="px-6 flex justify-between w-max md:px-0">
                        <Link href='/'>
                            <span aria-label="Bobong" className="flex space-x-2 items-center">
                                <span className=" font-bold text-gray-100 text-md">Bo</span>
                            </span>
                        </Link>
                        
                    </div>
                    <div className="flex px-4 items-center">
                        <div className="px-1">
                            <Link href={'/post'}>
                                <span> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                </svg>
                                </span>
                            </Link>
                        </div>
                        <div className="px-1">
                            <Link href={'/profile'}>
                                <span> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                </span>
                            </Link>
                        </div>
                        <div className="px-1">
                            <Link href={'/post'}>
                                <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}