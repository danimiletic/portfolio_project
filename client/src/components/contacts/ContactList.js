import { Link } from 'react-router-dom';
import { DropdownButton, Dropdown, Container } from 'react-bootstrap';

const ContactList = ({ contacts }) => {
  return (
    <Container>
    <>
    <DropdownButton id="dropdown-basic-button" title="View Contacts">
      <Dropdown.Item>
      { contacts.map( c => 
        <>
        <Link to={`/contacts/${c.id}`} key={c.id}>{c.name}</Link>
        <br />
        </>
        )}
      </Dropdown.Item>
    </DropdownButton>
      {/* { contacts.map( c => 
        <>
        <Link to={`/contacts/${c.id}`} key={c.id}>{c.name}</Link>
        <br />
        </>
        )} */}
    </>
    </Container>
  )
}

export default ContactList;