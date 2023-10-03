"use client"

import React, { useContext } from "react"
import { DataContext } from "../../../stores/globalState"
import { useRouter } from "next/router"

const SellerPage = () => {
    const user = useContext(DataContext)
    const router = useRouter()
    if (user.role === "user") {
        return <div>you are user</div>
    }
    return <div>SellerPage</div>
}

export default SellerPage
