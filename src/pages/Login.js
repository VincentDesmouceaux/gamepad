import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");
  const navigate = useNavigate();

  return (
    <div className="page page_secondary">
      <div className="page__content-wrap-centerer">
        <main className="page__content">
          <div className="content content_columns-1-2 content_position-center content_fullsize">
            <div className="page__form">
              <h2 className="login__heading">Log in</h2>
              <form
                onSubmit={async (event) => {
                  event.preventDefault();
                  try {
                    const response = await axios.post(
                      "http://localhost:4000/user/login",
                      {
                        email,
                        password,
                      }
                    );
                    console.log(response.data);

                    if (response.data.token) {
                      handleToken(response.data.token);

                      navigate("/");
                    }
                  } catch (error) {
                    console.log(error.message);
                    console.log(error.response.data);

                    if (error.response?.status === 402) {
                      setErrorMessage("This field is required.");
                    }

                    if (error.response?.status === 403) {
                      setErrorMessage2("Don't forget to add your email.");
                    }

                    if (error.response?.status === 405) {
                      setErrorMessage("Wrong email and/or password !");
                    }
                  }
                }}
              >
                <div className="input">
                  <input
                    className="input__field"
                    placeholder="Email"
                    type="email"
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
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <button
                  className="button button_fill button_medium"
                  type="submit"
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
