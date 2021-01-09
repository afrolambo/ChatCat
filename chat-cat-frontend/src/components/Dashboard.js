import React from 'react'
import Sidebar from './Sidebar'
import OpenConversation from './OpenConversation'
import { useConversations } from '../contexts/ConversationsProvider'
import Welcome from './Welcome'

export default function Dashboard({ id }) {
    const { selectedConversation } = useConversations()
    return (
        <div>
            <div className="d-flex" style={{ height: '100vh' }}>
                <Sidebar id={id} />
                { selectedConversation && <OpenConversation /> }
            </div>
        </div>
    )
}
