"use client"

import React, { useContext, useEffect } from "react"
import { DataContext } from "../../../stores/globalState"
import { useRouter } from "next/router"

const ShopPage = () => {
    const [state, dispatch] = useContext(DataContext)
    const { auth } = state
    const { shop } = auth
    const router = useRouter()

    useEffect(() => {
        if (!shop) {
        }
    }, [auth])

    return <div>Shop page</div>
}

export default ShopPage
