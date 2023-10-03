import { createContext } from "react"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const user = {
        role: "user",
    }
    return <DataContext.Provider value={user}>{children}</DataContext.Provider>
}
