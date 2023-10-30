import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        let result = await fetch('/restaurants.json')
          .then((res) => res.json());

        setRestaurants(result.restaurants);
      } catch (error) {
        console.error("Error fetching restaurants:", error.message);
      }
    }
    fetchRestaurants();
  }, []);

  const restaurant = restaurants.find((item) => item.id == id);

  console.log(restaurant);

  return (
    <Row>
      <Col md={6}>
        {restaurant && (
          <Card>
            <Card.Img variant="top" src={restaurant.photograph} />
            <Card.Body>
              <Card.Title>{restaurant.name}</Card.Title>
              <h5>Location: {restaurant.neighborhood}</h5>
              <h5>Address: {restaurant.address}</h5>
            </Card.Body>
          </Card>
        )}
      </Col>

      <Col md={6}>
        {restaurant && (

          <Card style={{ width: '18rem' }}>
            <Card.Header>Operating Hours</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Monday: {restaurant.operating_hours.Monday}</ListGroup.Item>
              <ListGroup.Item>Tuesday: {restaurant.operating_hours.Tuesday}</ListGroup.Item>
              <ListGroup.Item>Wednesday: {restaurant.operating_hours.Wednesday}</ListGroup.Item>
              <ListGroup.Item>Thursday: {restaurant.operating_hours.Thursday}</ListGroup.Item>
              <ListGroup.Item>Friday: {restaurant.operating_hours.Friday}</ListGroup.Item>
              <ListGroup.Item>Saturday: {restaurant.operating_hours.Saturday}</ListGroup.Item>


            </ListGroup>
          </Card>
        )}
      </Col>
    </Row>
  );
}

export default RestaurantDetails;
