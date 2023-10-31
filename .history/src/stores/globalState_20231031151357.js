import { createContext } from "react"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const initState = {
        auth: {},
    }
    return <DataContext.Provider>{children}</DataContext.Provider>
}
