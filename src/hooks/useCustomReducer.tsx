import { useReducer, useState } from "react"
import { searchReducer } from "../utils/reducers"


export const useCustomReducer = () => {
    const [search, setSearch] = useState([])
    const [result, dispatch] = useReducer(searchReducer, search)

    const setSearchParams = (params: string) => {
        dispatch({ type: 'SEARCH', payload: params})
        setSearch(result)
    }

    return [search, setSearchParams]
}
