import React, { useState } from 'react';
import { Tab, Nav, Button, Modal} from 'react-bootstrap';
import Conversations from './Conversations';
import Contacts from './Contacts';
import '../assets/css/sideBar.css';

import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

export default function Sidebar({id}) {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
    const [ModalOpen, setModalOpen] = useState(false);
    const conversationsOpen = activeKey === CONVERSATIONS_KEY;

    function closeModal(){
        setModalOpen(false);
    }

    return (
        <div id="sideBarContainer" className="flex-column sideBarContainer" style={{display:'none'}}>
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-left">
                    <Nav.Item>
                        <Nav.Link className="activeTab" eventKey={ CONVERSATIONS_KEY }>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="disableTab" eventKey={ CONTACTS_KEY }>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content className="overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY} className="contact">
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className="p-2 small">
                    Your Id: <span className="text-white"> {id}</span>
                </div>
                <Button onClick={() => setModalOpen(true)} className="rounded-1 modalButton">
                    New { conversationsOpen ? 'Conversation' : 'Contact'}
                </Button>
            </Tab.Container>       


            <Modal show={ModalOpen} onHide={closeModal}>
                {conversationsOpen ? 
                    <NewConversationModal closeModal={closeModal}/> :
                    <NewContactModal closeModal={closeModal} />
                
                }
            </Modal>       
        </div>
    )
}
