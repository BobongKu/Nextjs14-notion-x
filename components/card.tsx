export default function Card(){
    return(
            <div className='flex items-center justify-center transition ease-in-out hover:-translate-y-2 drop-shadow-lg'>
                <div className=' mx-auto rounded-2xl shadow-xl'>
                    <div className="grid rounded-2xl max-w-[300px] max-h-[390px] shadow-sm bg-newgray flex-col">
                <img
                    src="https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg"
                    width="375"
                    height="100"
                    className="rounded-t-xl justify-center grid h-40 object-cover"
                    alt="movie.title"
                    />
                <div className="group py-2 px-3 grid z-10">
                    <span className="font-bold sm:text-md line-clamp-2 text-white">Cat</span>
                    <div>
                    <span className="h-20 line-clamp-3 text-sm leading-relaxed text-gray-300 font-bold">
                        안녕하세요 반갑습니다 이건 테스트 중인 사이트입니다 
                    </span>
                    </div>
                    <div className="flex">
                        <div className="py-1">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">Web Hacking</span>
                        </div>
                        <div className="py-1">
                            <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">Default</span>
                        </div>
                        <div className="py-1">
                            <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">Default</span>
                        </div>
                    </div>
                </div>
                <div className="border-t border-linegray p-1">
                    <span className="text-xs text-gray-400 px-3">2024년 03월 03일</span>
                </div>
                </div>
                
            </div>
        </div>
    )
}