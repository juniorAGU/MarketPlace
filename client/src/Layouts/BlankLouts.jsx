import React from 'react'
import { Outlet } from 'react-router-dom'

function BlankLouts({children}) {
    return (
        <main className='w-full min-hieght-screen'>
            { children}
        </main>
    )
}

export default BlankLouts