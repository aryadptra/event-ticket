import Navbar from '@/Components/Frontend/Navbar'
import React from 'react'

export default function AppLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
