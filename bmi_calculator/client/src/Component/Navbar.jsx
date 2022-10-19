import { Box, Button } from "@chakra-ui/react";
import React from "react";
import style from "../pages/style.module.css";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await fetch("https://evening-peak-43386.herokuapp.com/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    try {
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box className={style.navbar}>
      <Link to={"/bmi"}>BMI Calculator</Link>

      <Link to={"/history"}>History</Link>

      <Button color={"black"} onClick={handleLogout}>
        LOGOUT
      </Button>
    </Box>
  );
};

export default Navbar;
