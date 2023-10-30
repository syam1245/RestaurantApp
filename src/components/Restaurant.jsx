import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
function Restaurant({restaurant}) {


  return (
    <div>
    <Card>
    <Card.Img variant="top" src={restaurant.photograph} />

      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>

        <h5>
          Location: {restaurant.neighborhood}
        </h5>

        <h5>
          Address: {restaurant.address}
        </h5>

        <Button as={Link} to={`/restaurant/${restaurant.id}`}>More Details</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Restaurant
