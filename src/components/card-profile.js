import * as React from "react"
import { Row, Col, Image } from "react-bootstrap"

const CardProfile = ({imageUrl}) => (
    <>
        <Row>
            <Col sm={12} md={3} className="image-column">
                <Image src={imageUrl} roundedCircle />
            </Col>
            <Col sm={12} md={9} className="profile-information">
                <p>Name: </p>
                <p>Nickname</p>
                <p>Description</p>
            </Col>
        </Row>
    </>
)

export default CardProfile