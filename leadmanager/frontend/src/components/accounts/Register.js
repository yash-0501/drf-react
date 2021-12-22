import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password != password2) {
      this.props.createMessage({
        passwordNotMatch: "Passwords do not match",
      });
    } else {
      const newUser = {
        username,
        password,
        email
      };
      this.props.register(newUser);
    }
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  render() {

    if(this.props.isAuthenticated){
      return <Navigate to="/" />;
    }

    const { username, email, password, password2 } = this.state;

    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={this.onSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                onChange={this.onChange}
                value={username}
                name="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                onChange={this.onChange}
                value={email}
                name="email"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password1"
                name="password"
                value={password}
                onChange={this.onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password2" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password2"
                name="password2"
                value={password2}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
