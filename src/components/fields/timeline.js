import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { 
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent
} from '@material-ui/lab';


const colors = ["primary","secondary"];


const TimelineField = ({currentRoute, signals, handleSignalClick}) => {
  return (
    <Timeline align="right">
      {currentRoute.map((place, index) => (
        index === currentRoute.length - 1 ? <TimelineItem key={index.toString()}>
          <TimelineOppositeContent>
            {signals[index] ? <Typography color={colors[index%colors.length]}>{signals[index]} signal</Typography>:
            <Button variant="contained" size="small" color={colors[index%colors.length]} onClick={handleSignalClick}>
              Get Signal
            </Button>}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color={colors[index%colors.length]} />
          </TimelineSeparator>
          <TimelineContent>{place}</TimelineContent>
        </TimelineItem> :
        <TimelineItem key={index.toString()}>
          <TimelineOppositeContent>
            {signals[index] ? <Typography color={colors[index%colors.length]}>{signals[index]} signal</Typography>:
            <Button variant="contained" size="small" color={colors[index%colors.length]} onClick={handleSignalClick}>
              Get Signal
            </Button>}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color={colors[index%colors.length]} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{place}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline> 
  );
}

export default TimelineField;