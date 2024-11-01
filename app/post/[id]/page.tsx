
import NotionPage from "@/components/notion-page";
import { getPostId, getPostInfo } from "@/constants/notion-api";
import { Metadata } from "next";
import { NotionAPI } from "notion-client";
import Comments from "@/components/comment";
import { notFound } from "next/navigation";

const repo = process.env.COMMENTS_REPO;
const repoId = process.env.COMMENTS_REPO_ID;
const category = process.env.COMMENTS_CATEGORY;
const categoryId = process.env.COMMENTS_CATEGORY_ID;

export async function generateMetadata({params:{id}}:{params:{id:string}}): Promise<Metadata> {
  const title = await getPostId(id)
  if(title !== null){
    const info : any = await getPostInfo(title)
    const postTitle = info.properties.이름.title[0].plain_text
    const description = info.properties.Description.rich_text[0].plain_text
    return {
      title: `${postTitle} - Bobong Blog`,
      description: description,
      openGraph: {
        title: postTitle,
        description: description,
      }
    }
  } else {
    return {}
  }
}

export default async function Home({params:{id}}:{params:{id:string}}) {
  const notion = new NotionAPI();
  const title = await getPostId(id)
  if(title !== null){
    try{
      const recordMap = await notion.getPage(title);
      return (
        <main>
          <NotionPage recordMap={recordMap} />
          <div className="flex flex-col items-center px-4">
            <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
              <Comments repo={repo} repoId={repoId} category={category} categoryId={categoryId} />
            </div>
          </div>
        </main>
      );  
    } catch {
      return notFound()
    }
  }
  else{
    return notFound()  
  }
}