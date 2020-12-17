import React from 'react'
import Sidebar from './Sidebar'
import Welcome from './Welcome'

export default function Dashboard({ id }) {
    return (
        <>
            <Sidebar id={id} />
            <Welcome />
        </>
    )
}
