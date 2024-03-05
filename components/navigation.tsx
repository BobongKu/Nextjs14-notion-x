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
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="25" height="25" viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="currentColor" stroke="none">
                                <path d="M2270 5041 c-137 -15 -159 -21 -196 -56 -31 -30 -49 -36 -143 -54
                                -276 -53 -578 -181 -821 -348 -502 -346 -879 -883 -1019 -1453 -53 -216 -65
                                -329 -66 -595 0 -250 7 -327 50 -540 117 -584 430 -1137 801 -1415 180 -136
                                429 -279 606 -349 275 -109 799 -171 1328 -158 270 7 398 18 570 48 622 108
                                1096 442 1374 970 291 552 422 1457 301 2086 -106 555 -456 1080 -930 1395
                                -331 219 -830 392 -1309 454 -142 18 -439 26 -546 15z m560 -371 c310 -45 663
                                -154 915 -283 498 -256 838 -697 959 -1247 78 -353 52 -900 -64 -1360 -188
                                -746 -583 -1155 -1260 -1304 -154 -34 -279 -45 -565 -53 -459 -11 -870 29
                                -1145 113 -153 47 -454 216 -616 346 -260 209 -506 642 -613 1079 -55 223 -65
                                311 -65 569 0 250 9 334 59 531 68 267 202 536 384 774 65 86 263 287 351 358
                                155 125 377 253 547 316 177 65 421 111 593 111 80 0 124 15 160 55 25 27 25
                                27 125 20 55 -3 161 -15 235 -25z"/>
                                <path d="M1742 3224 c-198 -96 -174 -384 37 -459 58 -20 100 -19 164 5 97 37
                                159 126 159 231 0 188 -190 305 -360 223z"/>
                                <path d="M3245 3226 c-204 -95 -184 -385 32 -462 113 -40 244 17 297 130 100
                                211 -117 431 -329 332z"/>
                                <path d="M4055 2554 c-71 -37 -93 -81 -105 -207 -24 -245 -137 -475 -330 -667
                                -189 -187 -401 -298 -695 -360 -126 -27 -396 -37 -543 -21 -234 25 -487 97
                                -633 179 -260 147 -428 438 -449 777 -9 152 -25 187 -107 229 -85 43 -202 -6
                                -237 -99 -25 -66 6 -349 55 -497 137 -419 412 -691 842 -833 465 -153 987
                                -155 1412 -5 456 162 824 527 970 963 61 182 86 399 53 462 -43 81 -155 120
                                -233 79z"/>
                                </g>
                                </svg>
                                <span className=" font-bold text-gray-100 text-md">Bobong</span>
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