"use client"

import React, { useContext, useEffect } from "react"
import { useRouter } from "next/router"
import { DataContext } from "@/stores/globalState"

const ShopPage = () => {
    const [state, dispatch] = useContext(DataContext)
    const { auth } = state
    const { shop } = auth
    const router = useRouter()

    useEffect(() => {
        if (!shop) {
            router.push("/shop/login")
        }
    }, [auth])

    return <div>Shop page</div>
}

export default ShopPage
