import React, {useContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage'

const ConversationsContext = React.createContext()

export function useConversations() {
    return useContext(ConversationsContext)
}

export function ConversationsProvider( {children} ) {
    //list of conversations
    const [conversations, setConversations] = useLocalStorage('conversations', [])

    //create new contact
    function createConversation(recipients) {
        setConversations(prevConversations => {
            return [...prevConversations, { recipients, messages: [] }]
        })
    }
    return (
        <ConversationsContext.Provider value={{ conversations, createConversation }}>
            {children}
        </ConversationsContext.Provider>
    );
}

