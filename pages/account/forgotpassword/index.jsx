import React from "react";
import Link from "next/link";
import style from "./forgotpassword.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const ForgotPassword = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="light">
        <Container>
          <Navbar.Brand>
            <img
              src="https://offshootagency.in/images/logo.png"
              width="80"
              height="30"
              className="d-inline-block align-top"
              alt="offshoot logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className={style.fpContainer}>
        <div className={style.fpMainDiv}>
          <header className={style.fpHeading}>
            <h2>
              <span style={{ color: "#FF9933" }}>OFFSHOOT</span> ADMIN
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="60"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            <p className="mt-4">Forgot Password</p>
          </header>
          <main className={style.fpFormDiv}>
            <form>
              <label className="mb-1 ms-1">UserID</label>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter your UserID"
                />
              </div>
            </form>
          </main>
          <footer className={style.fpFooter}>
            <button type="submit" className="btn btn-secondary  mb-3">
              Generate OTP
            </button>
            <Link href="/signin" style={{textDecoration:"none"}}>Back to login page</Link>
          </footer>
        </div>
        <span className="mt-4">Copyright &copy; Offshoot 2022</span>
      </div>
    </>
  );
};

export default ForgotPassword;
