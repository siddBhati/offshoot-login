import Header from "@/components/header/header";
import React, { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";


const AddUser = () => {
  

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const portfolioRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const userTypeRef = useRef();
  const loginIDRef = useRef();
  const passwordRef = useRef();
  const statusRef = useRef();

  useEffect(()=>{

  })
  
   


  async function handleAddUser(event) {

    event.preventDefault();
    try {
      const obj = {
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
        portfolio: portfolioRef.current.value,
        region: regionRef.current.value,
        city: cityRef.current.value,
        userType: userTypeRef.current.value,
        loginID: loginIDRef.current.value,
        password: passwordRef.current.value,
        status: statusRef.current.value,
      };
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Header />
      <Form className="p-5" onSubmit={handleAddUser}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Full Name"
              ref={nameRef}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              required
              ref={phoneRef}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              ref={emailRef}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Portfolio</Form.Label>
            <Form.Select defaultValue="Choose..." required ref={portfolioRef}>
              <option>IDFC COLLECTION</option>
              <option>SBI COLLECTION</option>
              <option>PNB COLLECTION</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Region</Form.Label>
            <Form.Select defaultValue="Choose..." required ref={regionRef}>
              <option>North</option>
              <option>East</option>
              <option>South</option>
              <option>West</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>City</Form.Label>
            <Form.Select defaultValue="Choose..." required ref={cityRef}>
              <option>Delhi</option>
              <option>Noida</option>
              <option>Ghaziabad</option>
              <option>Meerut</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>User Type</Form.Label>
            <Form.Select defaultValue="Choose..." required ref={userTypeRef}>
              <option>ADMIN</option>
              <option>SUPERVISER</option>
              <option>FOS</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Login ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="LoginID"
              required
              ref={loginIDRef}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Password"
              required
              ref={passwordRef}
            />
          </Form.Group>
        </Row>
        <Form.Group as={Col} className="col-1 mb-3" controlId="formGridState">
          <Form.Label>User Status</Form.Label>
          <Form.Select defaultValue="Choose..." required ref={statusRef}>
            <option>Active</option>
            <option>In-Active</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddUser;
