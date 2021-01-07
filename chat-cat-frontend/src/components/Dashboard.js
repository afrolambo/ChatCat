import React from 'react'
import Sidebar from './Sidebar'
import Welcome from './Welcome'

export default function Dashboard({ id }) {
    return (
        <div>
            <div className="d-flex" style={{ height: '100vh' }}>
                <Sidebar id={id} />
                <OpenConversation />
            </div>
        </div>
    )
}
