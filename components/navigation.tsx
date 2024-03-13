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
                        <div className="hover:bg-gray-600 hover:bg-opacity-50 rounded-md px-2">
                            <Link href={'/category'} aria-label="post">
                                <span> 
                                카테고리
                                </span>
                            </Link>
                        </div>
                        <div className="hover:bg-gray-600 hover:bg-opacity-50 rounded-md px-2">
                            <Link href={'/post'} aria-label="post">
                                <span> 
                                글 목록
                                </span>
                            </Link>
                        </div>
                        <div className="hover:bg-gray-600 hover:bg-opacity-50 rounded-md px-2">
                            <Link href={'/profile'} aria-label="profile">
                                <span> 
                                프로필
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}