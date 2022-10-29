import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setScoreInfo } from "../redux/actions";

function Questions() {
  const questions = useSelector((state) => state.questions);
  const score = useSelector((state) => state.score);

  const [order, setOrder] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(-1);
  const [shuffled, setShuffled] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (questions?.length && !shuffled) {
      shuffle(questions);
      setShuffled(true);
    }
  }, [questions]);

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const handleNext = (answer) => {
    if (selectedChoice === answer) dispatch(setScoreInfo(score + 1));
    setOrder((state) => ++state);
    setSelectedChoice(-1);
    if (order === questions.length - 1) {
      navigate("/score");
    }
  };

  return questions.map((question, index) => (
    <Box
      key={index}
      sx={{
        marginTop: -20,
        display: order === index ? "flex" : "none",
        flexDirection: "column",
      }}
    >
      <Typography variant="caption" fontSize={24} sx={{ my: 2 }}>
        Q{index + 1}: {question.question}
      </Typography>
      <RadioGroup
        value={selectedChoice}
        onChange={(e) => setSelectedChoice(Number(e.target.value))}
      >
        {question.choices.map((choice, i) => (
          <FormControlLabel
            key={i}
            value={i}
            control={<Radio />}
            label={choice}
          />
        ))}
      </RadioGroup>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ my: 5, width: 200, alignSelf: "center" }}
        onClick={() => handleNext(question.answer)}
      >
        Next
      </Button>
    </Box>
  ));
}

export default Questions;
