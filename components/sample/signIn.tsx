import React, { useState, createContext, useEffect, useRef } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { seceltorValue, userData } from "recoilstore";
import { useRouter } from "next/router";
const SignIn = ({ editValue, setEditValue }: any) => {
  const router = useRouter();
  const userList = [
    {
      id: 1,
      user: "userone",
      password: "userone123",
    },
    {
      id: 2,
      user: "usertwo",
      password: "usertwo123",
    },
    {
      id: 3,
      user: "userthree",
      password: "userthree123",
    },
    {
      id: 4,
      user: "userfour",
      password: "userfour123",
    },
    {
      id: 5,
      user: "userfive",
      password: "userfive123",
    },
  ];
  // const [data, setData] = useState(userList);
  const [userNameValue, setUserNameValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [recoilValue, setRecoilValue] = useRecoilState(userData);
  const [data, setData] = useState(userList);
  const [otpValue, setotpValue] = useState("");
  const previousValue = useRef("");

  const editClickData: any = useRecoilValue(seceltorValue);
  // const data = {
  //   username: userNameValue,
  //   password: passwordValue,
  //   phonenumber: 7097048694,
  // };
  useEffect(() => {
    previousValue.current = userNameValue;
  }, [userNameValue]);
  const clickHandler = () => {
    let filterData = data.filter(
      (num) => num?.password === passwordValue && num?.user === userNameValue
    );
    let verifyUser = userNameValue?.includes(editClickData?.userName);
    let verifyPassword = passwordValue?.includes(editClickData?.userPassword);
    console.log(filterData, editValue, "filterData=====");
    if (!editValue && filterData.length > 0) {
      setRecoilValue({
        userName: filterData[0]?.user,
        userPassword: filterData[0]?.password,
      });
    } else {
      !editValue && alert("incorrect details!!");
    }
    if (editValue && (verifyUser || verifyPassword)) {
      setRecoilValue({
        userName: userNameValue ? userNameValue : editClickData?.userName,
        userPassword: passwordValue
          ? passwordValue
          : editClickData?.userPassword,
      });
      router.push("/demo");
    }
    // fetch("http://localhost:3000/api/login", {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });
    setUserNameValue("");
    setPasswordValue("");
    setEditValue(false);
  };
  const userNameHandler = (e: any) => {
    setUserNameValue(e.target.value);
  };
  const passwordHandler = (e: any) => {
    setPasswordValue(e.target.value);
  };

  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    if (editValue) {
      setUserNameValue(editClickData?.userName);
      setPasswordValue(editClickData?.userPassword);
    }
  }, [editValue]);

  const otpData = {
    username: "nagaraju",
    phoneNumber: otpValue,
  };
  const otpGeneratorValue = (e: any) => {
    setotpValue(e.target.value);
  };

  // const otpGenerator = () => {
  //   alert("clicked!!");
  //   fetch("http://localhost:3000/auth/otp", {
  //     method: "post",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(otpData),
  //   });
  // };
  return (
    <Box style={{ marginTop: "20px" }}>
      <Box>
        <TextField
          id="outlined-basic"
          label="UserName"
          variant="outlined"
          onChange={userNameHandler}
          value={userNameValue}
          placeholder="userName"
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="password"
          variant="outlined"
          onChange={passwordHandler}
          value={passwordValue}
          placeholder="password"
        />
        <br />
        <br />

        <Button onClick={() => clickHandler()}>
          {editValue ? "SAVE DETAILS" : "ENTER DETAILS"}
        </Button>
        <Button>click</Button>
      </Box>
      <Typography>{previousValue.current}</Typography>
      {/* <Box>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={otpGeneratorValue}
          value={otpValue}
          placeholder="password"
        />
        <br />
        <br />
        <Button onClick={() => otpGenerator()}>ENTER</Button>
      </Box> */}
    </Box>
  );
};

export default SignIn;
