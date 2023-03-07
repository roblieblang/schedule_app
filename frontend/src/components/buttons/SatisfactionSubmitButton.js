import React from 'react';
import { Link } from "react-router-dom";

export default function SubmitQuiz(QuizValue) {

  return (
    <Link to= "/dashboard">
            <button>Sumbit Quiz</button>
        </Link>
  );
};