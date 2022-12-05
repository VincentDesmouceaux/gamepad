import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      setErrorMessage("");

      const response = await axios.post("http://localhost:4000/user/signup", {
        email: email,
        username: username,
        password: password,
      });
      console.log(response.data);

      if (response.data.token) {
        handleToken(response.data.token);

        navigate("/");
      }
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);

      if (error.response?.status === 400) {
        setErrorMessage2("This email already exist !");
      }

      if (error.response?.status === 402) {
        setErrorMessage("This field is required.");
      }

      if (error.response?.status === 403) {
        setErrorMessage2("Don't forget to add your email.");
      }

      if (error.response?.data.message === "Missing parameters") {
        setErrorMessage("Veuillez remplir tous les champs");
      }
    }
  };

  return (
    <div className="page page_secondary">
      <div className="page__content-wrap-centerer">
        <div className="page__content-wrap">
          <main className="page__content">
            <div className="content content_columns-1-2 content_position-center content_fullsize">
              <div className="page__form">
                <h2>Sign Up</h2>

                <form onSubmit={handleSubmit}>
                  <div className="input">
                    <input
                      className="input__field"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                    <div className="input__error">
                      <span className="error error_field">{errorMessage2}</span>
                    </div>
                  </div>
                  <div className="input">
                    <input
                      className="input__field"
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                    />
                    <div className="input__error">
                      <span className="error error_field">{errorMessage}</span>
                    </div>
                  </div>
                  <div className="register-form__password">
                    <div className="input">
                      <input
                        className="input__field"
                        type="text"
                        name="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                      />
                      <div className="input__error">
                        <span className="error error_field">
                          {errorMessage}
                        </span>
                      </div>
                    </div>
                    <div className="register-form__password-help">
                      {errorMessage}
                    </div>
                    <div className="register-form__password-help">
                      {errorMessage2}
                    </div>
                  </div>
                  <button
                    className="button button_fill button_medium"
                    type="submit"
                    value="Register"
                  >
                    Sign up
                  </button>
                </form>
                <div className="page__additional">
                  <Link to={`/login`}>Already have an account? Log in.</Link>
                </div>
                <div className="page__info">
                  <div>
                    <h3>
                      <span>You can use social accounts to sign up :</span>
                    </h3>
                  </div>
                  <div>
                    <div className="social-accounts-auth-block">
                      <div className="social-accounts-auth-block__link social-accounts-auth-block__link_facebook">
                        <span className="">Continue with Facebook</span>
                      </div>
                      <div className="social-accounts-auth-block__link social-accounts-auth-block__link_twitter">
                        <span className="">Continue with Twitter</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="page__footer-agreement">
                "By signing up, you agree to RAWG’s Terms of Service and Privacy
                Policy".
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Signup;
