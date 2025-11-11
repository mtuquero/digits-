'use client';

import { Card, ListGroup } from 'react-bootstrap';
import { Contact, Note } from '@prisma/client';
import Link from 'next/link';
import NoteItem from './Noteitem';
import AddNoteForm from './AddNoteForm';

/* Renders a single contact card. See list/page.tsx. */
const ContactCard = ({ contact, notes }: { contact: Contact; notes: Note[] }) => (
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
    </Card.Body>
    <ListGroup variant="flush">
      {notes.map((note) => <NoteItem key={note.id} note={note} />)}
    </ListGroup>
    <AddNoteForm contactId={contact.id} />
    <Card.Footer>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <Link href={`/edit/${contact.id}`}>Edit</Link>
    </Card.Footer>
  </Card>
);

export default ContactCard;
