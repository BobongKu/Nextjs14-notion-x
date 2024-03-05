import Card from "@/components/card";
import { getAllList } from "@/constants/notion-api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Post - Bobong Blog',
  description: "Bobong's INFOSEC Blog",
}

export default async function Posts() {
    const posts = await getAllList()
    return(
        <>
        <div className="flex flex-col items-center min-h-screen px-5 py-10 mb-10">
        <div className="md:grid xl:grid-cols-5 md:grid-cols-3 sm:flex-col sm:flex">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-600 xl:col-start-3 md:col-start-2 text-center">
                Posts
              </h1>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 py-10 m-6 gap-x-12 gap-y-16">
              {posts.results.map((post:any, index:any) => (
                  <Card key={index} data={post}/>
                ))}
            </div>
        </div>
        </>
    )
}