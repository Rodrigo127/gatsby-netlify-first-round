import * as React from "react"
import {Link} from "gatsby"
import { Row, Col, ListGroup } from "react-bootstrap"

const RepositoriesSection = ({ repositories }) => (
    <>
        <Row className="justify-content-center">
            <Col sm={11} md={9} className="repositories-column">
                <h1>Repositories</h1>
                <ListGroup>
                    {repositories.nodes.map((repo)=>{
                        return (
                            <ListGroup.Item>
                                <Link to={repo.url} target="_blank">
                                    {repo.name}
                                </Link>
                            </ListGroup.Item>
                        )
                    })}                    
                </ListGroup>
            </Col>
        </Row>
    </>
)

export default RepositoriesSection