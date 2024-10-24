interface RequestContext<T extends Record<string, string>> {
    params: Promise<T>
}

export default RequestContext