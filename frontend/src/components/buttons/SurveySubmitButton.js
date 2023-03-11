import React from 'react';
import { Link } from "react-router-dom";

export default function SubmitSurvey(chronotype) {
  return (
    <Link to= "/mychronotype">
            <button>Sumbit Survey</button>
        </Link>
  );
};