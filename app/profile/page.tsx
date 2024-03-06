

export default function Profile() {
    return(
        <section className="text-gray-400 body-font w-full h-screen">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
            
                <div className="flex flex-col sm:flex-row mt-10  justify-center items-center">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 15C9.85038 15.6303 10.8846 16 12 16C13.1154 16 14.1496 15.6303 15 15" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                        <path opacity="0.5" d="M22 19.723V12.3006C22 6.61173 17.5228 2 12 2C6.47715 2 2 6.61173 2 12.3006V19.723C2 21.0453 3.35098 21.9054 4.4992 21.314C5.42726 20.836 6.5328 20.9069 7.39614 21.4998C8.36736 22.1667 9.63264 22.1667 10.6039 21.4998L10.9565 21.2576C11.5884 20.8237 12.4116 20.8237 13.0435 21.2576L13.3961 21.4998C14.3674 22.1667 15.6326 22.1667 16.6039 21.4998C17.4672 20.9069 18.5727 20.836 19.5008 21.314C20.649 21.9054 22 21.0453 22 19.723Z" stroke="#1C274C" stroke-width="1.5"/>
                        </svg>
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                        <h2 className="font-medium title-font mt-4 text-white text-lg">보봉규</h2>
                        <div className="w-12 h-1 bg-gray-300 rounded mt-2 mb-4"></div>
                        <p className="text-base text-gray-400">웹/모바일 취약점을 공부하고 있고 취미로 개발도 하고 있습니다.</p>
                    </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <ul className="text-2xl">
                        <li className="py-2">우석대 정보보안학과 졸업</li>
                        <li className="py-2">소속 동아리 : SOTI</li>
                        <li className="py-2">Github : <a href="https://github.com/BobongKu">https://github.com/BobongKu</a></li>
                        <li className="py-2">Dreamhack : <a href="https://dreamhack.io/users/7805">https://dreamhack.io/users/7805</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}