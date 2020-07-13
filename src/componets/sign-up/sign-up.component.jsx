import React from "react";
import { connect } from "react-redux";

import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, displayName, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    signUpStart({ email, displayName, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            handleChange={this.handleChange}
            value={displayName}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            handleChange={this.handleChange}
            value={email}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            handleChange={this.handleChange}
            value={password}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            handleChange={this.handleChange}
            value={confirmPassword}
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
