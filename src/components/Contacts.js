import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useContacts } from '../contexts/ContactsProvider';

export default function Contacts() {
    const { contacts } = useContacts();

    return (
        <ListGroup variant='flush' className="contact">
            {contacts.map(contact =>(
                <ListGroup.Item key={contact.id} className="contact">
                    <p className="contactLine">{contact.name}</p> <p className="contactLine id">{contact.id}</p>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
