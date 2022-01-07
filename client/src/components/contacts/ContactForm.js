import { useState, useEffect } from 'react'; 
import { InputGroup, FormControl, Button, Container } from 'react-bootstrap';

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({ name: '', email: '', phone: 0, comment: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
      addContact(contact)
      setContact({ name: '', email: '', phone: 0, comment: '' })

  }

  return (
    <>
    <Container>
      <form onSubmit={handleSubmit}>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Name:</InputGroup.Text>
          <FormControl 
          aria-label="Name" 
          aria-describedby="inputGroup-sizing-sm"
          name='name' 
          value={contact.name}
          onChange={(e) => setContact({...contact, name: e.target.value})}
          required
          placeholder="..." />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Email:</InputGroup.Text>
          <FormControl 
          aria-label="Email" 
          aria-describedby="inputGroup-sizing-sm"
          name='email' 
          value={contact.email}
          onChange={(e) => setContact({...contact, email: e.target.value})}
          required
          placeholder="..." />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Phone:</InputGroup.Text>
          <FormControl 
          aria-label="Phone" 
          aria-describedby="inputGroup-sizing-sm"
          name='phone' 
          value={contact.phone}
          onChange={(e) => setContact({...contact, phone: e.target.value})}
          required
          placeholder="..." />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Comment:</InputGroup.Text>
          <FormControl 
          aria-label="Comment" 
          aria-describedby="inputGroup-sizing-sm"
          name='comment' 
          value={contact.comment}
          onChange={(e) => setContact({...contact, comment: e.target.value})}
          required
          placeholder="..." />
        </InputGroup>
        <br />
        <br />
        <Button variant="outline-dark" type="submit">Submit</Button>
      </form>
    </Container>
  </>
  )
}

export default ContactForm; 