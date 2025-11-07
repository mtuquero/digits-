import { getServerSession } from 'next-auth';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Image from 'next/image';
import StuffItemAdmin from '@/components/StuffItemAdmin';
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
  const stuff = await prisma.stuff.findMany({});
  const users = await prisma.user.findMany({});
  // Get only Kim Binsted's contact
  const contacts = await prisma.contact.findMany({
    where: {
      OR: [
        { firstName: 'Kim', lastName: 'Binsted' },
        { firstName: 'kim', lastName: 'binsted' },
        { firstName: 'Kim', lastName: 'binsted' },
        { firstName: 'kim', lastName: 'Binsted' },
      ],
    },
  });

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1>List Stuff Admin</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Condition</th>
                  <th>Owner</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {stuff.map((item) => (
                  <StuffItemAdmin key={item.id} {...item} />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>List Users Admin</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>List Contacts Admin</h1>
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
