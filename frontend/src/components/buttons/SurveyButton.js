import { Link } from "react-router-dom";

export default function SurveyButton() {
    return (
        <Link to= './quiz'>
            <button> Take Quiz </button>
        </Link>
    )
};