import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/images/logo.jpg'

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-light">
            <Container>
                <Navbar.Brand href="">Normandie <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Nomandy logo"></img>
                </Navbar.Brand>
                <Navbar.Brand href="https://www.normandie.fr/">Qui sommes-nous?</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavBar;