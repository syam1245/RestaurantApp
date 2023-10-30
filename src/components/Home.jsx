import React, { useState, useEffect } from 'react';
import Restaurant from './Restaurant';
import { Container, Row, Col } from 'react-bootstrap';

function Home({ searchQuery }) {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        let result = await fetch('./restaurants.json').then((res) => res.json());
        setRestaurants(result.restaurants);
      } catch (error) {
        console.error("Error fetching restaurants:", error.message);
      }
    }

    fetchRestaurants();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      // Filter restaurants based on the search query
      const filtered = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    } else {
      // If there's no search query, display all restaurants
      setFilteredRestaurants(restaurants);
    }
  }, [searchQuery, restaurants]);

  return (
    <Container>
      <Row>
        {filteredRestaurants && filteredRestaurants.map((restaurant, index) => (
          <Col key={restaurant.id} md={3} className='my-3' key={index}>
            <Restaurant restaurant={restaurant} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
