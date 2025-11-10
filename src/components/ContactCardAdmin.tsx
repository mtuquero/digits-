'use client';

import { Card, ListGroup } from 'react-bootstrap';
import { Contact, Note } from '@prisma/client';
import NoteItem from './Noteitem';

/* Renders a single contact card for admin. See admin/page.tsx. */
const ContactCardAdmin = ({ contact, notes }: { contact: Contact; notes: Note[] }) => (
  <Card className="h-100">
    <Card.Header>
      <Card.Img variant="top" src={contact.image} width={75} style={{ width: '75px', height: '75px' }} />
    </Card.Header>
    <Card.Body>
      <Card.Title>
        {contact.firstName}
        {' '}
        {contact.lastName}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{contact.address}</Card.Subtitle>
      <Card.Text>{contact.description}</Card.Text>
      <p className="blockquote-footer">{contact.owner}</p>
    </Card.Body>
    <ListGroup variant="flush">
      {notes.map((note) => <NoteItem key={note.id} note={note} />)}
    </ListGroup>
  </Card>
);

export default ContactCardAdmin;
