import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/courses" 
          element={isAuthenticated ? <Courses /> : <Navigate to="/signup" />} 
        />
        <Route path="/signup" element={<Signup />} />
        {/* Add other routes here as needed */}
      </Routes>
    </>
  );
};

export default App;
