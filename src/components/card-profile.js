import * as React from "react"
import { Link } from 'gatsby'
import { Row, Col, Image } from "react-bootstrap"

const CardProfile = ({ profile }) => (
    <>
        <Row>
            <Col sm={11} md={3} className="image-column">
                <Image src={profile.avatarUrl} roundedCircle />
            </Col>
            <Col sm={11} md={6} className="profile-information">
                <p>
                    <span>Name: {profile.name}</span><br />
                    <span>{profile.login}</span><br />
                </p>
                <p>
                    <span>{profile.bio}</span><br />
                </p>
                <p>
                    <span>{profile.company}</span><br />
                    <span>{profile.location}</span><br />
                    <span><Link to={profile.websiteUrl}>Linkedin</Link></span><br />
                    <span><Link to={`https://twitter.com/${profile.twitterUsername}`}>@{profile.twitterUsername}</Link></span><br />
                </p>
            </Col>
        </Row>
    </>
)

export default CardProfile