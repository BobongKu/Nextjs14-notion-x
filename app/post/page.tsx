export const runtime = 'edge'; 

import Card from "@/components/card";
import Search from "@/components/search";
import { getCategory, getList } from "@/constants/notion-api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Post - Bobong Blog',
  description: "Bobong's INFOSEC Blog",
}

export default async function Posts({searchParams}: any) {
  const search = searchParams.search
  const category = searchParams.category
  let posts:any = []
  if(category){
    posts = await getCategory(category)
  } else {
    posts = await getList(search)
  }
  return(
      <>
      <div className="flex flex-col items-center min-h-screen px-5 py-10 mb-10">
      <div className="md:grid xl:grid-cols-5 md:grid-cols-3 sm:flex-col sm:flex justify-center items-center">
            <h1 className="text-5xl font-bold text-white xl:col-start-3 md:col-start-2 text-center">
              글 목록
            </h1>
            <div className="xl:col-start-5 md:col-start-3 md:row-start-1 items-center">
              <Search/>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 py-10  xl:gap-x-20 md:gap-x-12 gap-y-16">
            {posts.results.map((post:any, index:any) => (
                <Card key={index} post={post}/>
              ))}
          </div>
      </div>
      </>
  )
}