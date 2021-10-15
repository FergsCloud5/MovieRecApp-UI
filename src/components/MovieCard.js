import axios from "axios";
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

export default function MovieCard(props) {
    const [movie, setMovie] = React.useState("before GET");

    React.useEffect(() => {
        const movieURL = "http://ec2-18-220-255-11.us-east-2.compute.amazonaws.com:5000/movies/" + props.movieID;
        axios.get(movieURL).then((response) => {
            setMovie(response.data[0]);
        });
    });

    function likeMovie() {
        axios.post("http://ec2-3-23-92-210.us-east-2.compute.amazonaws.com:5000/movie-histories", {
            userID: 3,
            movieID: props.movieID,
            movieTitle: movie.movie_title,
            likedMovie: 1,    
        }).then((response) => {
          console.log(response.data);
        });
      };
    

    if (!movie) return null;

    return (
        <Card className="card-coin card-plain" style={{height: "350px"}}>
            <CardBody>
                <Row>
                <Col className="text-center" md="12">
                    <h4 className="text-uppercase">{movie.movie_title}</h4>
                    <hr className="line-primary" />
                </Col>
                </Row>
                <Row>
                    <ListGroup>
                        <ListGroupItem>Genres: {movie.genres} </ListGroupItem>
                        <ListGroupItem>Year: {movie.title_year}</ListGroupItem>
                        <ListGroupItem>Rating: {movie.imdb_score}</ListGroupItem>
                    </ListGroup>
                </Row>
            </CardBody>
            <CardFooter className="text-center">
                <Button onClick={likeMovie} className="btn-simple" color="primary">
                Like
                </Button>
            </CardFooter>
        </Card>
    );
}