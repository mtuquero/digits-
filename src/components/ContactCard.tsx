'use client';

import { Card } from 'react-bootstrap';
import { Contact } from '@prisma/client';

/* Renders a single contact card. See list/page.tsx. */
const ContactCard = ({ id, firstName, lastName, address, image, description }: Contact) => (
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
    </Card.Body>
    <Card.Footer>
      <Link href={`/edit/${id}`}>Edit</Link>
    </Card.Footer>
  </Card>
);

export default ContactCard;
