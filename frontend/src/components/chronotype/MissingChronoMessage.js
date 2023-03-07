import './MyChronotype.css';
import './MissingChronoMessage.css';

export default function MissingChronoMessage () {
    return (
        <>
        <div className="boxtest">
            <p className="boxtest-text">
                It appears that you do not have a chronotype yet. Take the above quiz to find out your chronotype!
            </p>
        </div>
        <img className='Mascot2Img' src={require("./Mascot2.png")}alt= "Mascot2" />
        </>
    );
}