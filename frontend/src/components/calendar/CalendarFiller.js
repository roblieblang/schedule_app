import React from 'react';

class CalendarFiller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(42).fill(null)
                }
            ],
            lightMode: true
        };
    }

}

export default CalendarFiller;