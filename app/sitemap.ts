import { getAllList } from '@/constants/notion-api';
import { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts: any = await getAllList([])
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
        url: `https://bobong.blog/post/${post.id}`,
        lastModified: `${post.properties.Date.created_time}`
      })),
  ]
}