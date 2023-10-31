import { createContext, useReducer } from "react"
import reducers from "./reducers"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const initState = {
        auth: {},
    }
    const [state, dispatch] = useReducer(reducers, initState)

    return <DataContext.Provider>{children}</DataContext.Provider>
}
