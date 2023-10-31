import { createContext, useEffect, useReducer } from "react"
import reducers from "./reducers"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const initState = {
        auth: {},
    }
    const [state, dispatch] = useReducer(reducers, initState)

    useEffect(() => {
        const firstLogin = localStorage.getItem("firstLogin")
    }, [])

    return (
        <DataContext.Provider value={[state, dispatch]}>
            {children}
        </DataContext.Provider>
    )
}
