import { Client } from "@notionhq/client"

export const POST_DATABASE = process.env.NOTION_POST_DATABASE
export const KEY = process.env.NOTION_API_KEY
export const repo = process.env.COMMENTS_REPO;
export const repoId = process.env.COMMENTS_REPO_ID;
export const category = process.env.COMMENTS_CATEGORY;
export const categoryId = process.env.COMMENTS_CATEGORY_ID;

const notion = new Client({auth: KEY})

export async function get4List(){
    const posts = await notion.databases.query({
        database_id: POST_DATABASE,
        page_size: 4,
    })
    return posts
}

export async function getPostId(id){
    const title = decodeURIComponent(id)
    const post = await notion.databases.query({
        database_id: POST_DATABASE,
        filter: {
            property: "이름",
            title: {
                equals: title
            }
        }
    })
    return post.results[0]?.id ?? null
}

export async function getList(search){
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
                },
                {
                    property: "category",
                    select: {
                        equals: search
                    }
                }
            ]
        };
    }

    const posts = await notion.databases.query(baseQuery)
    return posts
}

export async function getCategory(category,size){
    const baseQuery = {
        database_id: POST_DATABASE,
        sorts: [
          {
          property: "Date",
          direction: "descending",
          },
        ],
        filter: {
            property: "category",
            select: {
                equals: category
            }
        }
    };

    if(size){
        baseQuery.page_size = size
    }

    const posts = await notion.databases.query(baseQuery)
    return posts
}

export async function getPostInfo(postId){
    const info = await notion.pages.retrieve({page_id: postId})
    return info
}

export async function getCategoryList(){
    const database = await notion.databases.retrieve({database_id: POST_DATABASE})
    const categoryList = database.properties.category.select.options
    return categoryList
}