import Link from "next/link";

export default function Profile() {
    return(
        <section className="text-gray-400 body-font w-full h-full sm:h-screen">
            <div className="container px-5 mx-auto flex flex-col items-center pt-10">
                <span className="text-white text-2xl" >{`Hi! I'm Bobong 😎`}</span>
                <br/>
                <span className="text-white text-xl" >This is a blog that summarizes what I studied</span>
                <br/>
                <span className="text-white text-xl" >{`If there's any information you need, I hope it's helpful`}</span>
                <div className="grid grid-cols-1 gap-10  md:w-1/2 w-full pt-10">
                <div>
                    <span className="hover:text-white text-3xl font-semibold mb-2 text-gray-300">😁 About Me</span>
                    <hr className="border-gray-600 mb-4" />
                    <div className="grid items-center mb-3 text-white">
                        <div className="py-1" >
                            <span>Nick_Name = </span>
                            <span className="font-bold">{`"Bobong"`}</span>
                        </div>
                        <div className="py-1" >
                            <span className="">Gender = </span>
                            <span className="font-bold">{`"Male"`}</span>
                        </div>
                        <div className="py-1" >
                            <span>Final_Education = </span>
                            <span className="font-bold">{`"Woosuk University Department of Information Security"`}</span>
                        </div>
                        <div className="py-1" >
                            <span>Special_Move = </span>
                            <span className="font-bold">{`"Web Hacking"`}</span>
                        </div>
                        <div className="py-1" >
                            <span>Main_Weapon = </span>
                            <span className="font-bold">{`"Burp Suite"`}</span>
                        </div>
                        <div className="py-1" >
                            <span>Hobby = </span>
                            <span className="font-bold">{`"Web Development"`}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="hover:text-white text-3xl font-semibold mb-2 text-gray-300">🏆 Awards</span>
                    <hr className="border-gray-600 mb-4" />
                    <div className="grid items-center mb-3 text-white">
                        <div className="py-1" >
                            <span>2020 대학정보보호 동아리 공로상</span>
                        </div>
                        <div className="py-1" >
                            <span>2022 ICT이노베이션스퀘어확산산사업 호남권 모의 IR피칭대회 전주 예선전 우수상</span>
                        </div>
                        <div className="py-1" >
                            <span>2023 전주ICT이노베이션스퀘어 디지털 신기술 아이디어 공모전 우수상</span>
                        </div>
                        <div className="py-1" >
                            <span>2023 호남사이버보안 콘퍼런스 웹취약점 경진대회 장려상</span>
                        </div>
                    </div>
                </div>
                <div>
                    <hr className="border-gray-600 mb-4"/>
                    <div className="flex flex-row justify-center">
                        <Link href="https://github.com/BobongKu">
                        <div className="grid mb-3 text-white px-10">
                            <div className="py-1 hover:text-yellow-500 flex items-center">  
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 96 96" fill="none"><path width={20} height={20} d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="rgb(255, 255, 255)"/></svg>
                            <span className="ml-2">GitHub</span>  
                            </div>
                        </div>
                        </Link>
                        <Link href="https://dreamhack.io/users/7805">
                        <div className="grid mb-3 text-white px-10">
                            <div className="py-1 hover:text-yellow-500 flex items-center">  
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Group">
                                <g id="Group_2">
                                <path id="Vector" d="M23.0384 7.34726C17.444 1.75284 9.28399 -0.421377 1.64831 1.64831C-0.421377 9.28483 1.75284 17.444 7.34726 23.0384L7.39158 23.0827C15.0381 21.0105 21.0105 15.0373 23.0827 7.39158L23.0384 7.34726Z" fill="#8D98FF"/>
                                <g id="Group_3">
                                <path id="Vector_2" d="M23.0829 7.39158L16.8914 9.06908C13.0848 10.101 9.01736 9.01723 6.22851 6.22838L1.64844 1.64831C9.28495 -0.421377 17.445 1.75284 23.0394 7.34726L23.0829 7.39075V7.39158Z" fill="#7A8AFF"/>
                                <path id="Vector_3" d="M23.0818 7.39146C21.0096 15.038 15.0363 21.0104 7.39062 23.0826L9.08484 16.8309C10.1076 13.0561 13.0561 10.1084 16.8309 9.08484L23.0826 7.39062L23.0818 7.39146Z" fill="#607FFF"/>
                                <path id="Vector_4" d="M9.06908 16.8911L7.39158 23.0826L7.34726 23.0383C1.75284 17.4439 -0.421377 9.28387 1.64831 1.64819L6.22838 6.22826C9.01723 9.01711 10.101 13.0846 9.06908 16.8911Z" fill="#A6A8FF"/>
                                </g>
                                </g>
                                </g>className
                            </svg>
                            <span className="ml-2">DreamHack</span>  
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}