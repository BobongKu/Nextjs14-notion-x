import { getCategory, getCategorySize } from "@/constants/notion-api";
import Link from "next/link";

export default async function Section(data:any) {
    const title = data.data.name
    const posts = await getCategory(title,4)
    const size = await getCategorySize(title)
    return(
        <div>
            <Link href={`/post?category=${title}`}>
                <span className="hover:text-white text-xl font-semibold mb-2 text-gray-300">{`${title} (${size})`}</span>
            </Link>
            <hr className="border-gray-600 mb-4" />
            <div className="grid items-center mb-3">
                {posts.results.map((post:any, index:any) => (
                    <div className="py-1" key={index}>
                        <Link href={`/post/${post.properties.이름.title[0].plain_text}`}>
                            <span className="hover:text-white " >{post.properties.이름.title[0].plain_text}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}