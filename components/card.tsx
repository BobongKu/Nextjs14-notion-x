"use client"
import Image from "next/image";
import Link from "next/link";

export default function Card(post: any){

    const title = post.data?.properties.이름.title[0].plain_text ?? post.post.properties.이름.title[0].plain_text
    const description = post.data?.properties.Description.rich_text[0].plain_text ?? post.post.properties.Description.rich_text[0].plain_text;
    const cover = post.data?.cover.external.url ?? post.post?.cover.external.url 
    const tags = post.data?.properties.Tag.multi_select ?? post.post?.properties.Tag.multi_select
    const date = post.data?.properties.Date.created_time ?? post.post?.properties.Date.created_time
    const postId = post.data?.id ?? post.post?.id
    const public_url = post.data?.public_url ?? post.post?.public_url

    if(public_url != null){
        return(
            <div className='flex items-center justify-center transition ease-in-out hover:-translate-y-2'>
                    <Link href={`/post/${postId}`}>                
                    <div className=' mx-auto rounded-2xl shadow-xl'>
                        <div className="grid rounded-2xl max-w-[300px] max-h-[390px] shadow-sm bg-newgray flex-col">
                    <Image
                        src={cover}
                        width="375"
                        height="100"
                        className="rounded-t-xl justify-center grid h-40 object-none"
                        alt="movie.title"
                        />
                    <div className="group py-2 px-3 grid z-10">
                        <span className="py-2 font-bold text-md line-clamp-1 text-white">{title}</span>
                        <div>
                        <span className="line-clamp-1 text-sm leading-relaxed text-gray-300 font-bold">
                            {description}
                        </span>
                        </div>
                        <div className="flex py-1">
                        {tags.map((tag: any,) => ( 
                            <Link key={tag} href={`/post?search=${tag.name}`}>
                                <span className="px-1 mr-2 text-gray-400 bg-black bg-opacity-30 rounded-md text-xs md:text-sm  hover:text-black hover:bg-gray-200 hover:bg-opacity-70 hover:font-bold">{tag.name}</span>        
                            </Link>       
                        ))}
                        </div>
                    </div>
                    <div className="items-center border-t border-linegray p-1">
                        <span className="text-xs text-gray-400 px-3">{date.split('T')[0]}</span>
                    </div>
                    </div>
                </div>
                </Link>
            </div>
        )
    } else {
        return(
            <div className='flex items-center justify-center transition ease-in-out hover:-translate-y-2'>              
                    <div className=' mx-auto rounded-2xl shadow-xl'>
                        <div className="grid rounded-2xl max-w-[300px] max-h-[390px] shadow-sm bg-newgray flex-col">
                    <Image
                        src={cover}
                        width="375"
                        height="100"
                        className="rounded-t-xl justify-center grid h-40 object-none"
                        alt="movie.title"
                        />
                    <div className="group py-2 px-3 grid z-10">
                        <span className="py-2 font-bold text-md line-clamp-1 text-white">{title}</span>
                        <div>
                        <span className="line-clamp-1 text-sm leading-relaxed text-gray-300 font-bold">
                            {description}
                        </span>
                        </div>
                        <div className="flex py-1">
                        {tags.map((tag: any,) => (
                            <Link key={tag} href={`/post?search=${tag.name}`}>
                                <span className="px-1 mr-2 text-gray-400 bg-black bg-opacity-30 rounded-md text-xs md:text-sm  hover:text-black hover:bg-gray-200 hover:bg-opacity-70 hover:font-bold">{tag.name}</span>        
                            </Link>        
                        ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-linegray p-1">
                        <span className="text-xs text-gray-400 px-3">{date.split('T')[0]}</span>
                        <span className="px-3">🔒</span>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}