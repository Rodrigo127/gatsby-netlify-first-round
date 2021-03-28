import * as React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"
import HeaderGitBlog from "./header-git-blog"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout-git-blog.css"

const LayoutGitBlog = ({ children }) => {
    return (<>
        <Container fluid="true">
            <HeaderGitBlog />
            <Row>
                <Col>
                    {children}
                </Col>
            </Row>
        </Container>
    </>)
}

LayoutGitBlog.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LayoutGitBlog
