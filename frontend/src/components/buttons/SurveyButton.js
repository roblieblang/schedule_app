import { Link } from "react-router-dom";
import { Button } from "@mui/material";
//import Card from './components/survey/survey';

export default function SurveyButton() {

    

    
    return (
        <Link to= './quiz'>
            <button> Take Quiz </button>
        </Link>
    )
};