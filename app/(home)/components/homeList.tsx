import Card from "@/components/card"
import { getList } from "@/constants/notion-api"

export default async function HomeList() {
    const posts = await getList()
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-5 m-6 gap-x-12 gap-y-16">
                {posts.results.map((post: any, index:any) => (
                    <Card key={index} post={post}/>
                ))}
            </div>
        </>
    )
}