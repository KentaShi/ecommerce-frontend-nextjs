"use client"

import React, { useContext, useEffect } from "react"
import { DataContext } from "../../../stores/globalState"
import { useRouter } from "next/router"

const ShopPage = () => {
    const [state, dispatch] = useContext(DataContext)
    const router = useRouter()

    useEffect(() => {
        if (user.role !== "shop") {
            router.push("/")
        }
    }, [])

    return <div>Shop page</div>
}

export default ShopPage
