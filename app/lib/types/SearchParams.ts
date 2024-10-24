type SearchParams<T = Record<string, string | number>> = {
    [Key in keyof T]?: T[Key];
}

export default SearchParams