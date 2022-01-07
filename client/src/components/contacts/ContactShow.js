import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { Card, Container } from 'react-bootstrap';

const ContactShow = ({ deleteContact, id }) => {
  const [contact, setContact] = useState({name: '', email: '', phone: 0, comment: '' })
  let params = useParams()

  useEffect( () => {
    axios.get(`/api/contacts/${params.contactId}`)
      .then( res => {
        setContact(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  return (
    <Container>
      <>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{contact.name}</Card.Title>
            <Card.Text>
            {contact.email}
            <br />
            {contact.phone}
            <br />
            {contact.comment}
            </Card.Text>
            <Link to="/contacts">Go back</Link>
          </Card.Body>
        </Card>
      </>
    </Container>
  )
}

export default ContactShow;