import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const VALUES = ["6 AM", "7 AM", "9 AM", "12 PM", "2 PM", "4 PM", "6 PM", "7 PM", "9 PM", "11 PM", "12 PM"];
const description = [
  "Wake up feeling refreshed and ready for the day.",
  "Enjoy a slow and leisurely breakfast, possibly with some quite time to read or meditate.",
  "Begin work or start the day’s activities.",
  "Take a break for lunch and some light physical activity.",
  "Continue with work or actives, but start to feel a lull in energy.",
  "Take a short nap or simply rest for a bit.",
  "Wake up from the nap feeling rejuvenated and ready to tackle the rest of the day.",
  "Enjoy dinner and socialize with friends or family.",
  "Engage in quite activities such as reading, writing, or watching a movie.",
  "Get ready for bed and start winding down for the night.",
  "Fall asleep, ready to rest and recharge for the next day.",
];

const styles = {
  descriptionBox: {
    backgroundColor: 'white',
    border: '1px solid black',
    padding: '10px',
    borderRadius: '10px',
    width: '300px',
  },
};

export default function ChronotypeTimeline() {
  return (
    <Timeline position="alternate">
      {VALUES.map((time, index) => (
        <TimelineItem key={time}>
          <TimelineOppositeContent color="text.secondary">
            {time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div style={styles.descriptionBox}>{description[index]}</div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
