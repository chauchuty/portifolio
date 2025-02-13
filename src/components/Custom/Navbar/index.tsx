import { Nav, Navbar } from "rsuite";

export function NavbarCustom() {
    return (
        <Navbar>
            <Navbar.Brand href="#">Cesar M. Chauchuty</Navbar.Brand>
            <Nav pullRight>
                <Nav.Item>Início</Nav.Item>
                <Nav.Item>Sobre</Nav.Item>
                <Nav.Item>Projetos</Nav.Item>
                <Nav.Item>Contato</Nav.Item>
            </Nav>
        </Navbar>
    )
}