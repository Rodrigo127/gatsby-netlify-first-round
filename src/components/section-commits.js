import * as React from "react"
import { Row, Col, ListGroup } from "react-bootstrap"

const CommitsSection = ({ repoName, commits }) => (
    <>
        <Row className="justify-content-center">
            <Col sm={11} md={9} className="commits-column">
                <h1>Commits of {repoName}</h1>
                <ListGroup>
                    {commits.nodes.map((commit)=>{
                        return (<ListGroup.Item>{commit.oid}<br />{commit.messageHeadline}</ListGroup.Item>)
                    })}                    
                </ListGroup>
            </Col>
        </Row>
    </>
)

export default CommitsSection