import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Layout from "./component/Layout/Layout";
import Signup from "./page/Signup/Signup";
import Login from "./page/Login/Login";
import Dashboard from "./page/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
