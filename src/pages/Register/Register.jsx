import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Register = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    // access form datas using formdata
    const name = form.get("name")
    const photo = form.get("photo")
    const email = form.get("email")
    const password = form.get("password")
    console.log(name,photo,email,password);
  };
  return (
    <div>
      <Navbar></Navbar>

      <div>
        <h2 className="text-3xl  text-center">Please Register</h2>

        <form
          onSubmit={handleLogin}
          className="card-body md:w-3/4 lg:w-1/2 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                YourName
              </a>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center">
          Allready have an account??
          <Link className="text-blue-900 font-semibold" to="/login">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
