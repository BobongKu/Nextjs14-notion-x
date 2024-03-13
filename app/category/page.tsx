import { getCategoryList } from "@/constants/notion-api"
import Item from "./components/item"

export default async function Category() {
    const category = await getCategoryList()
    return(
        <section className="md:p-20 p-10 text-gray-400 body-font w-full h-full">
            <div className="flex items-center space-x-3 mb-6">
                <h1 className="text-5xl text-gray-200 font-bold">카테고리</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {category.map((data:any, key:any)=>{
                    return(
                        <Item data={data} key={key}/>
                    )
                })}
            </div>
        </section>
    )
}