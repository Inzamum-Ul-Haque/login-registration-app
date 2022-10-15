import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import fb from "../images/fb.png";
import google from "../images/google.png";
import github from "../images/github.png";
import "./LoginRegister.css";

const LoginRegister = () => {
  return (
    <div>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form">
              <h2 className="title">Sign In</h2>
              <div className="input-field">
                <FontAwesomeIcon className="icons" icon={faUser} />
                <input type="text" name="username" placeholder="Username" />
              </div>
              <div className="input-field">
                <FontAwesomeIcon className="icons" icon={faLock} />
                <input type="password" name="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />

              <p className="social-text">Or Sign-in with social platforms</p>
              <div className="social-media">
                <button>
                  <img src={fb} alt="" />
                </button>
                <button>
                  <img src={google} alt="" />
                </button>
                <button>
                  <img src={github} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container"></div>
      </div>
    </div>
  );
};

export default LoginRegister;
