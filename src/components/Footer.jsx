import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <Navbar bg="warning" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="link" to={'/'}>
            Elemento madera
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>DTECNO</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
