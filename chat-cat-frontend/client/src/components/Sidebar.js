import React, {useState} from 'react';
import {Tab, Nav, Button, Modal} from 'react-bootstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'
// import NewConversationModal from './NewConversationModal'
// import NewContactModal from './NewContactModal'

const CONVERSATIONS_KEY = "conversation"
const CONTACTS_KEY = "contacts"

export default function Sidebar({id}) {
    // const [modalOpen, setModalOpen] = useState(false)
    // const conversationsOpen = activeKey === CONVERSATIONS_KEY

    // function closeModal() {
    //     setModalOpen(false)
    // }
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)

    return (
        <div style={{width: '250px'}} className="d-flex flex-column">
           <Tab.Container activeKey={activeKey}>
               <Nav variant="tabs" className="justify-content-center">
                   <Nav.Item>
                       <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                       <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                   </Nav.Item>
               </Nav>
           </Tab.Container>

            {/* <Modal show={modalOpen} onHide={closeModal} >
                {conversationsOpen ? 
                    <NewConversationModal closeModal={closeModal}/> : 
                    <NewContactModal closeModal={closeModal}/>
                    }
            </Modal> */}
        </div>
    );
}