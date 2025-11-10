import { getServerSession } from 'next-auth';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Image from 'next/image';
import ContactCardAdmin from '@/components/ContactCardAdmin';
import { prisma } from '@/lib/prisma';
import { adminProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  adminProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  const contacts = await prisma.contact.findMany({
    include: {
      notes: true,
    },
  });

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1 className="text-center">List Contacts (Admin)</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
              {contacts.map((contact) => (
                <Col key={`Contact-${contact.firstName}-${contact.id}`}>
                  <ContactCardAdmin contact={contact} notes={contact.notes} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>List Contacts Admin</h1>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>{contact.firstName}</td>
                    <td>{contact.lastName}</td>
                    <td>{contact.address}</td>
                    <td>
                      {/* eslint-disable-next-line react/jsx-no-undef */}
                      <Image
                        src={contact.image}
                        alt={`${contact.firstName} ${contact.lastName}`}
                        width={50}
                        height={50}
                      />
                    </td>
                    <td>{contact.description}</td>
                    <td>{contact.owner}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AdminPage;
