import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/actions";

function Start() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const handleStart = () => {
    dispatch(setUserInfo(userName));
    navigate("/questions");
  };
  return (
    <Box sx={{ width: 300 }}>
      <TextField
        label="USERNAME"
        sx={{ mx: 3, my: 2 }}
        variant="outlined"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Button variant="outlined" onClick={handleStart}>
        Start
      </Button>
    </Box>
  );
}

export default Start;
