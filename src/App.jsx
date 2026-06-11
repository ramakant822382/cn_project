import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Layout from "./component/Layout/Layout";
import Signup from "./page/Signup/Signup";
import Login from "./page/Login/Login";
import Dashboard from "./page/Dashboard/Dashboard";
import Gallary from "./page/Gallary/Gallary";
import ProtectedRoute from "./component/Protect_route/ProtectRoute";
import Project from "./page/Project/Project";
import Logout from "./page/Logout/Logout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
           <Route path="/login" element={<Logout />} />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/gallary"
            element={
              <ProtectedRoute>
                <Gallary />
              </ProtectedRoute>
            }
          />
          <Route
            path="/project"
            element={
              <ProtectedRoute>
                <Project />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
