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
                    <div className="grid items-center mb-3">
                        <div className="py-1" >
                            <span className="text-white">2020 대학정보보호 동아리 공로상</span>
                        </div>
                        <div className="py-1" >
                            <span className="text-white">2022 ICT이노베이션스퀘어확산산사업 호남권 모의 IR피칭대회 전주 예선전 우수상</span>
                        </div>
                        <div className="py-1" >
                            <span className="text-white">2023 전주ICT이노베이션스퀘어 디지털 신기술 아이디어 공모전 우수상</span>
                        </div>
                        <div className="py-1" >
                            <span className="text-white">2023 호남사이버보안 콘퍼런스 웹취약점 경진대회 장려상</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}