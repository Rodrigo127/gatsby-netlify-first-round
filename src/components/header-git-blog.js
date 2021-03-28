import * as React from "react"
import { Navbar, Nav } from "react-bootstrap"

const HeaderGitBlog = (props) => {
    return (<>
        <Navbar expand="xl" variant="light" bg="dark" >
            <Navbar.Brand href="#">Rodrigo 127</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="/commits">Commits</Nav.Link>
                    <Nav.Link href="/route3">Route 3</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>)
}

export default HeaderGitBlog
