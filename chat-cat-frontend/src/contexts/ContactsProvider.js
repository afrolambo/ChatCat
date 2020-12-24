import React, {useContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage'

const ContactsContext = React.createContext()

export function useContacts() {
    return userContext(ContactsContext)
}

export function ContactsProvider( {children} ) {
    //list of contacts
    const [contacts, setContacts] = useLocalStorage('contacts', [])

    //create new contact
    function createContact(id, name) {
        setContacts(prevContacts => {
            return [...prevContacts, { id, name }]
        })
    }
    return (
        <ContactsContext.Provider value={{ contacts, createContact }}>
            {children}
        </ContactsContext.Provider>
    );
}

