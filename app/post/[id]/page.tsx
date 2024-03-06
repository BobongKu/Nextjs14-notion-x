import NotionPage from "@/components/notion-page";
import { getPostInfo } from "@/constants/notion-api";
import { Metadata } from "next";
import { NotionAPI } from "notion-client";
import Comments from "@/components/comment";

const repo = process.env.COMMENTS_REPO;
const repoId = process.env.COMMENTS_REPO_ID;
const category = process.env.COMMENTS_CATEGORY;
const categoryId = process.env.COMMENTS_CATEGORY_ID;

export async function generateMetadata({params:{id}}:{params:{id:string}}): Promise<Metadata> {
  const info : any = await getPostInfo(id)
  const postTitle = info.properties.이름.title[0].plain_text
  const description = info.properties.Description.rich_text[0].plain_text
  return {
    title: `${postTitle} - Bobong Blog`,
    description: description
  }
}

export default async function Home({params:{id}}:{params:{id:string}}) {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(id);
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
}