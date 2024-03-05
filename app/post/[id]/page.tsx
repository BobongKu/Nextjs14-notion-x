import NotionPage from "@/components/notion-page";
import { getPostInfo } from "@/constants/notion-api";
import { Metadata } from "next";
import { NotionAPI } from "notion-client";

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
    </main>
  );
}