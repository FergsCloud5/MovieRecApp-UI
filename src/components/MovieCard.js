import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  ListGroupItem,
  ListGroup,
  Row,
  Col,
} from "reactstrap";

export default function LandingPage() {
    return (
        <Card className="card-coin card-plain">
            <CardBody>
                <Row>
                <Col className="text-center" md="12">
                    <h4 className="text-uppercase">Light Coin</h4>
                    <span>Plan</span>
                    <hr className="line-primary" />
                </Col>
                </Row>
                <Row>
                    <ListGroup>
                        <ListGroupItem>50 messages</ListGroupItem>
                        <ListGroupItem>100 emails</ListGroupItem>
                        <ListGroupItem>24/7 Support</ListGroupItem>
                    </ListGroup>
                </Row>
            </CardBody>
            <CardFooter className="text-center">
                <Button className="btn-simple" color="primary">
                Get plan
                </Button>
            </CardFooter>
        </Card>
    );
}