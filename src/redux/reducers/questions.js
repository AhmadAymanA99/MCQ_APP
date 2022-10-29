const initialQuestion = [
  {
    question: "What is the capital of United Kingdom?",
    choices: ["Manchester", "Birmingham", "London", "New Castle"],
    answer: 2,
  },
  {
    question: "What is the capital of United States?",
    choices: ["California", "New York", "Miami", "Florida"],
    answer: 1,
  },
  {
    question: "what is the biggest mammal in the world?",
    choices: ["Elephant", "White rhino", "Polar bear", "Blue whale"],
    answer: 3,
  },
  {
    question: "what is the largest planet?",
    choices: ["Jupiter", "Saturn", "Uranus", "Earth"],
    answer: 0,
  },
  {
    question: "what is largest organ in human body?",
    choices: ["The heart", "The skin", "The liver", "The brain"],
    answer: 1,
  },
];

const Questions = (state = initialQuestion, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default Questions;
