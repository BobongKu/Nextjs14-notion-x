import { Client } from "@notionhq/client"

export const POST_DATABASE = process.env.NOTION_POST_DATABASE
export const KEY = process.env.NOTION_API_KEY

const notion = new Client({auth: KEY})

export async function getList(){
    const posts = await notion.databases.query({
        database_id: POST_DATABASE,
        page_size: 4,
    })
    return posts
}

export async function getAllList(data){
    const search = data['search']
    const baseQuery = {
        database_id: POST_DATABASE,
        sorts: [
          {
          property: "Date",
          direction: "descending",
          },
        ],
    };

    if (search) {
        baseQuery.filter = {
            or: [
                {
                    property: "이름",
                    title: {
                        contains: search
                    }
                },
                {
                    property: "Tag",
                    multi_select: {
                        contains: search
                    }
                },
                {
                  property: "Description",
                    title: {
                      contains: search
                    }
                }
            ]
        };
    }

    const posts = await notion.databases.query(baseQuery)
    return posts
}

export async function getPostInfo(postId){
    const info = await notion.pages.retrieve({page_id: postId})
    return info
}