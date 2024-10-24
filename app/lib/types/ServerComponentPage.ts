interface PageProps<Params, SearchParams> {
    params: Promise<Params>
    searchParams: Promise<SearchParams>
}

type ServerComponentPage<Params , SearchParams> = (props: PageProps<Params, SearchParams>) => Promise<JSX.Element>

export default ServerComponentPage