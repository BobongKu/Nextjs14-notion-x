import { getList } from '@/constants/notion-api';
import { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts: any = await getList()
  return [
    {
      url: 'https://bobong.blog',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://bobong.blog/profile',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://bobong.blog/post',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    }, 
    ...(await posts.results).map((post: any) => ({
        url: `https://bobong.blog/post/${encodeURIComponent(post.properties.이름.title[0].plain_text)}`,
        lastModified: `${post.last_edited_time}`,
        priority: 0.7
      }))
  ]
}