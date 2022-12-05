import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";
import Cookies from "js-cookie";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Gamedetails from "./pages/Gamedetails";

function App() {
  const [search, setSearch] = useState("");
  const [token, setToken] = useState(Cookies.get("token") || null);
  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token, { expires: 7 });
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };

  return (
    <Router>
      <Header
        token={token}
        handleToken={handleToken}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="/signup" element={<SignUp handleToken={handleToken} />} />
        <Route path="/gamedetails/:id" element={<Gamedetails />} />
      </Routes>
    </Router>
  );
}

export default App;
