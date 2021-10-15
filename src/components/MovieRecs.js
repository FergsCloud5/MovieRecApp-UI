import axios from "axios";
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import MovieCard from "./MovieCard";

export default function MovieRecs() {
    const [recs, setRecs] = React.useState([]);

    React.useEffect(() => {
        const URL = "http://ec2-18-119-118-50.us-east-2.compute.amazonaws.com:5000/recommendations/3";
        axios.get(URL).then((response) => {
            setRecs(response.data.splice(0,6));
        });
    }, []);

    if (!recs[0]) return "No recommendations";

    return (
        <Container>
            <Row>
                <h1>Your Movie Recommendations</h1>
            </Row>
            <Row>
                {recs.map((rec) => 
                    <Col md="4">
                        <MovieCard movieID={rec.movieID}/>
                    </Col>
                )}
            </Row>
        </Container>
    );
}