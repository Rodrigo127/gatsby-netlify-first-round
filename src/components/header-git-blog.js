import * as React from "react"
import { Navbar, Nav } from "react-bootstrap"

const HeaderGitBlog = ({brand}) => {
    return (<>
        <Navbar expand="xl" variant="light" bg="dark" >
            <Navbar.Brand href="#">{brand}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Profile</Nav.Link>
                    <Nav.Link href="/commits">Commits</Nav.Link>
                    <Nav.Link href="/following">Who I follow</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>)
}

export default HeaderGitBlog
