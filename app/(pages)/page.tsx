import ServerComponentPage from "@/app/lib/types/ServerComponentPage";

const Page: ServerComponentPage<null, { name: string }> = async ({searchParams}) => {
    const name = (await searchParams).name;
    return <div className={"flex flex-col justify-center items-center h-screen"}>
        it is nothing
        {name ? name : ''}
    </div>
}

export default Page