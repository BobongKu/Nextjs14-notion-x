import LoadingCard from "@/app/(home)/components/loading-card";

export default function HomeList() {
    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-5 m-6 gap-x-12 gap-y-16  opacity-40"> 
                <LoadingCard/>
                <LoadingCard/>
                <LoadingCard/>
                <LoadingCard/>
            </div>
        </>
    )
}