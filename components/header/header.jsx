import React from "react";
import { NavItem } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {signOut} from 'next-auth/react'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://offshootagency.in/images/logo.png"
            alt=""
            srcSet=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-rocket-takeoff-fill me-2"
                viewBox="0 0 16 16"
              >
                <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z" />
                <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z" />
              </svg>
              Dashboard
            </Nav.Link>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <Navbar.Brand className="ps-3">Settings</Navbar.Brand>
                <NavDropdown.Item href="#action/3.2">
                  Manage Users
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Assign Permission
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Manage Cycle
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Manage Region
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Manage City
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Manage Dispositions
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <NavDropdown title="Collection" id="basic-nav-dropdown">
              <Navbar.Brand className="ps-3">Process Link</Navbar.Brand>
              <NavDropdown.Item href="#action/3.2">
                Upload Allocation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Delete Duplicate Allocation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Allocation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Upload Allocation FE_CODE
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Paid Dump Upload
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Update Status
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Update Supervisor Remarks
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Update Deallocation
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <Navbar.Brand className="ps-3">Reports</Navbar.Brand>
              <NavDropdown.Item href="#action/3.3">
                Search Engine
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Life Cycle</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                FE Visits Life Cycle
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <NavDropdown
            title={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-person-circle "
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            }
            id="basic-nav-dropdown"
          >
            <Navbar.Brand className="ps-3">My Account</Navbar.Brand>
            <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Change Password
            </NavDropdown.Item>
         
            <NavDropdown.Item href="#action/3.3"  onClick={()=>signOut()}>Logout</NavDropdown.Item>
          </NavDropdown>
          <Navbar.Brand className="ms-3 h2">IDFC Admin</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
