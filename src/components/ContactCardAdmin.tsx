'use client';

import { Card } from 'react-bootstrap';
import { Contact } from '@prisma/client';

/* Renders a single contact card for admin. See admin/page.tsx. */
const ContactCardAdmin = ({ firstName, lastName, address, image, description, owner }: Contact) => (
  <Card className="h-100">
    <Card.Header>
      <Card.Img variant="top" src={image} width={75} style={{ width: '75px', height: '75px' }} />
    </Card.Header>
    <Card.Body>
      <Card.Title>
        {firstName}
        {' '}
        {lastName}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{address}</Card.Subtitle>
      <Card.Text>{description}</Card.Text>
      <p className="blockquote-footer">{owner}</p>
    </Card.Body>
  </Card>
);

export default ContactCardAdmin;
