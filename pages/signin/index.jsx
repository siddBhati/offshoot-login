import React, { useRef } from "react";
import style from "./signin.module.css";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";



const Signin = () => {
  const loginIdRef = useRef();
  const passwordRef = useRef();
  const {session,status}=useSession()
  const router=useRouter()

 const submitHandler= async (event)=>{
  event.preventDefault();
  const enteredLoginID=loginIdRef.current.value
  const enteredPassword=passwordRef.current.value
  const result = await signIn("credentials", {
    redirect: false,
    loginID: enteredLoginID,
    password: enteredPassword,
  });
  if(result) router.push('/home')
  }


  return (
    <div className={style.signinContainer}>
      <header>
        <img
          src="https://offshootagency.in/images/logo.png"
          alt=""
          className={style.signinLogo}
        />
      </header>
      <div className={style.signinMainDiv}>
        <header className={style.signinHeading}>
          <h1>Welcome to Offshoot</h1>
          <p>Please sign in to your account below.</p>
        </header>
        <main className={style.signinFormDiv}>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                ref={loginIdRef}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Keep me logged in
              </label>
            </div>
            <footer className={style.signinFooter}>
              <Link href="/account/forgotpassword">Forgot Password</Link>
              <button type="submit" className="btn btn-primary ms-3 mb-3">
                Login to Dashboard
              </button>
            </footer>
          </form>
        </main>
      </div>
      <span className="mt-4">Copyright &copy; Offshoot 2022</span>
    </div>
  );
};

export default Signin;
