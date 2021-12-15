import React from 'react';
import { Container, Form, FormControl,Button } from 'react-bootstrap';

const SearchField = () => {
    return (
        <div>
            <Container>
  <Form className="d-flex mx-auto mb-5 forms">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button className="custom-button2">Search</Button>
      </Form>
    
  
  </Container>
        </div>
    );
};

export default SearchField;