import { Link } from 'react-router-dom';

const ContactList = ({ contacts }) => {
  return (
    <>
      { contacts.map( c => 
        <>
        <Link to={`/contacts/${c.id}`} key={c.id}>{c.name}</Link>
        <br />
        </>
        )}
    </>
  )
}

export default ContactList;