import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setScoreInfo } from "../redux/actions";

function Score() {
  const userName = useSelector((state) => state.userInfo);
  const score = useSelector((state) => state.score);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFinish = () => {
    dispatch(setScoreInfo(0));
    navigate("/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: -20,
        flexDirection: "column",
      }}
    >
      <Typography variant="caption" fontSize={24} sx={{ my: 2 }}>
        {score >= 3 ? `Goog Job, ${userName} !` : `Try Again, ${userName} !`}
      </Typography>
      <Typography variant="caption" fontSize={24} sx={{ my: 2 }}>
        Your Score is {score}
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ my: 5, width: 200, alignSelf: "center" }}
        onClick={handleFinish}
      >
        Finish
      </Button>
    </Box>
  );
}

export default Score;
