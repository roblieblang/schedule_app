import React from 'react';
import './InterestingFacts.css';

const FactsSpeech = () => {
    return (
        <div>
            <div className='speech'>
                <div className='text-wrapper'>
                    <p className='speech-text'>
                    Understanding the concept of chronotypes can be challenging and may seem daunting to incorporate into your daily routine. However, don't worry because I'm here to help you with that! Let Calmmoth take care of the complexities, and you can focus on being the best version of yourself.
                    </p>
                </div>
                <img className='img' src={require("./Mascot1.png")}alt= "Mascot1" />
            </div>
        </div>
    );
};

export default FactsSpeech;