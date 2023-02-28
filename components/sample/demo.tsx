import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { seceltorValue, userData } from "recoilstore";

const Demo = ({ setEditValue }: any) => {
  const count: any = useRecoilValue(seceltorValue);
  const [recoilValue, setRecoilValue] = useRecoilState(userData);

  const editHandler = () => {
    setEditValue(true);
  };
  console.log(count, "iiiiiiiiiii");
  const logOutHandler = () => {
    setRecoilValue((prevUserState: any) => ({
      ...prevUserState,
      userName: "",
      userPassword: "",
    }));
    alert("log out successfully!!");
  };
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "lightgray",
          width: "100%",
          height: "50px",
        }}
      >
        <Box
          sx={{
            float: "right",
            display: "flex",
            gap: "10px",
            paddingRight: "20px",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "green" }}>{count?.userName}</Typography>

          <Typography sx={{ cursor: "pointer" }}>{""}</Typography>
          {count?.userName?.length > 0 && (
            <Typography
              sx={{ cursor: "pointer" }}
              onClick={() => editHandler()}
            >
              EDIT
            </Typography>
          )}
          {count?.userName?.length > 0 && (
            <Typography
              sx={{ cursor: "pointer", color: "red" }}
              onClick={() => logOutHandler()}
            >
              logout
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Demo;
