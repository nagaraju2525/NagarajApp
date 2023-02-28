import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { seceltorValue } from "recoilstore";
import Router from "next/router";

const BlankPage = () => {
  const userData = useRecoilValue(seceltorValue);
  console.log(userData, "userData==");
  const click = () => {
    localStorage.setItem("dataKey", "clicked");
    Router.push("/demo")
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <Typography sx={{ color: "" }}>profile page</Typography>
        <br />
        <br />
        <Typography sx={{ color: "green" }}>{userData?.userName}</Typography>
        <Button onClick={click}>click</Button>
      </Box>
    </Box>
  );
};

export default BlankPage;
