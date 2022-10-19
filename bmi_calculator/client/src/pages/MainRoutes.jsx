import React from "react";
import { Routes, Route } from "react-router-dom";
import Bmi from "./Bmi";
import BmiHistory from "./BmiHistory";
import Login from "./Login";
import SignUp from "./SignUp";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bmi" element={<Bmi />} />
      <Route path="/history" element={<BmiHistory />} />
    </Routes>
  );
};

export default MainRoutes;
