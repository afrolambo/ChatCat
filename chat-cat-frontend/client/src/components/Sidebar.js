import React from 'react';
import {Tab, Nav, Button, Modal} from 'react-bootstrap'
// import Conversations from './Conversations'
// import Contacts from './Contacts'
// import NewConversationModal from './NewConversationModal'
// import NewContactModal from './NewContactModal'

// const CONVERSATIONS_KEY = "conversation"
// const CONTACTS_KEY = "contacts"

export default function Sidebar({id}) {
    // const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    // const [modalOpen, setModalOpen] = useState(false)
    // const conversationsOpen = activeKey === CONVERSATIONS_KEY

    // function closeModal() {
    //     setModalOpen(false)
    // }

    return (
        <div style={{width: '250px'}} className="d-flex flex-column">
           <Tab.Container>
               
           </Tab.Container>

            <Modal show={modalOpen} onHide={closeModal} >
                {conversationsOpen ? 
                    <NewConversationModal closeModal={closeModal}/> : 
                    <NewContactModal closeModal={closeModal}/>
                    }
            </Modal>
        </div>
    );
}