import Link from "next/link";

export default function Navigation(){
    return(
        <nav className="text-white sticky top-0 backdrop-blur-sm bg-opacity-10 bg-gray-100 z-10">
            <div className="container flex items-center py-2 gap-6 relative m-auto px-4 md:px-12 lg:px-20 justify-end">
                <div className="px-2 hover:bg-gray-700 py-1 rounded-sm">
                    <Link href="/category">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </Link>
                </div>
            </div>
        </nav>
    )
}