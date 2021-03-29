import * as React from "react"
import { Row, Col, ListGroup } from "react-bootstrap"

const RepositoriesSection = ({ repositories }) => (
    <>
        <Row className="justify-content-center">
            <Col sm={11} md={9} className="repositories-column">
                <h1>Repositories</h1>
                <ListGroup>
                    {repositories.nodes.map((repo)=>{
                        return (<ListGroup.Item>{repo.name}</ListGroup.Item>)
                    })}                    
                </ListGroup>
            </Col>
        </Row>
    </>
)

export default RepositoriesSection