import * as React from "react"
import {Link} from "gatsby"
import { Row, Col, ListGroup } from "react-bootstrap"

const FollowingSection = ({ login, following }) => (
    <>
        <Row className="justify-content-center">
            <Col sm={11} md={9} className="following-column">
                <h1>{login} is following:</h1>
                <ListGroup>
                    {following.nodes.map((user)=>{
                        return (<ListGroup.Item>{user.name} <Link to={user.url} target="_blank" >@{user.login}</Link></ListGroup.Item>)
                    })}                    
                </ListGroup>
            </Col>
        </Row>
    </>
)

export default FollowingSection