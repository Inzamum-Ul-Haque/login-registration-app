import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
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
                <div className="icons">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <input type="text" name="username" placeholder="Username" />
              </div>
              <div className="input-field">
                <div className="icons">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <input type="password" name="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />

              <p className="social-text">Or Sign-in with social platforms</p>
              <div className="social-media">
                <button>
                  <img className="social-icon" src={fb} alt="" />
                </button>
                <button>
                  <img className="social-icon" src={google} alt="" />
                </button>
                <button>
                  <img className="social-icon" src={github} alt="" />
                </button>
              </div>
            </form>

            <form className="sign-up-form">
              <h2 className="title">Sign Up</h2>
              <div className="input-field">
                <div className="icons">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <div className="icons">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <input type="text" name="username" placeholder="Username" />
              </div>
              <div className="input-field">
                <div className="icons">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <input type="password" name="password" placeholder="Password" />
              </div>
              <input type="submit" value="Sign Up" className="btn solid" />

              <p className="social-text">Or Sign-in with social platforms</p>
              <div className="social-media">
                <button>
                  <img className="social-icon" src={fb} alt="" />
                </button>
                <button>
                  <img className="social-icon" src={google} alt="" />
                </button>
                <button>
                  <img className="social-icon" src={github} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
                ut!
              </p>
              <button className="btn tranparent"></button>
            </div>

            <img src="../images/login.svg" className="image" alt="" />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
                ut!
              </p>
              <button className="btn tranparent"></button>
            </div>

            <img src="../images/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
