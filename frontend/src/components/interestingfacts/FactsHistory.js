import React from 'react';
import './InterestingFacts.css';

const FactsHistory = () => {
    return (
        <div>
            <h2 className='title'>History of Chronotypes</h2>
            <div className='history'>
                <div className='text-wrapper'>
                    <p className='history-text'>
                    The concept of chronotype dates back to the early 20th century when German scientist Wilhelm His Jr. first proposed the idea. His work focused on the idea that individuals had different internal biological clocks that influenced their sleep patterns. In the 1970s, researchers developed the Morningness-Eveningness Questionnaire (MEQ) to help identify different chronotypes. Since then, studies have shown that chronotype can have a significant impact on an individual's health, productivity, and overall well-being. Research has also found that chronotype is influenced by a variety of factors, including genetics, age, and exposure to light. Today, the concept of chronotype continues to be an important area of study in the fields of sleep medicine and chronobiology.
                    </p>
                </div>
                <hr className='divider' />
                <div className='image-wrap'>
                    <img src={require("./WilhelmHisJr.png")}alt= "WilhelmHisJr" />
                </div>
            </div>
        </div>
    )
}

export default FactsHistory;