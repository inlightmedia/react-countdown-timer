/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import moment, { Moment } from 'moment'

interface ComponentProps {
  shouldShowOverageTimer?: boolean;
  countDownDateTime: string;
  elapsedTimeColor?: string;
  shouldShowTimeUnits?: boolean;
  shouldShowSeparator?: boolean;
  style?: object;
}

const CountDownUp: React.FunctionComponent<ComponentProps> = ({ 
  shouldShowOverageTimer = true,
  countDownDateTime,
  elapsedTimeColor = 'red',
  shouldShowTimeUnits = false,
  shouldShowSeparator=true,
  shouldHidePrecedingZeros=false,
  style,
}) => {
  const [year, setYear] = useState<number>();
  const [day, setDay] = useState<number>();
  const [hour, setHour] = useState<number>();
  const [minute, setMinute] = useState<number>();
  const [second, setSecond] = useState<number>();
  const [countDownTime, setCountDownTime] = useState<Moment>();
  const [countDownTimeElapsed, setCountDownTimeElapsed] = useState<boolean>(false);

  useEffect(() => {
    const ISO8601RegEx = /(\d{4})-(0[1-9]|1[0-2]|[1-9])-(\3([12]\d|0[1-9]|3[01])|[1-9])[tT\s]([01]\d|2[0-3]):(([0-5]\d)|\d):(([0-5]\d)|\d)([.,]\d+)?([zZ]|([+-])([01]\d|2[0-3]|\d):(([0-5]\d)|\d))$/;
    
    if (ISO8601RegEx.test(countDownDateTime)) {
      if (moment(countDownDateTime).isValid()) {
        setCountDownTime(moment(countDownDateTime));
      } else {
        console.error('Error: Expected valid date. The date supplied conforms to ISO 8601 but is not a real date.')
      }
    } else {
      console.error('Error: Expected ISO8601 formatted string. See this example: 2020-07-25T21:22:19Z. For more information on ISO8601 read:  ')
    }
  }, [])
  
  const clockInterval = setInterval(() => {
    if (countDownTime) {
      const yearsLeft = countDownTime.diff(moment(), 'years');
      const daysLeft = countDownTime.diff(moment(), 'days') % 365;
      const hoursLeft = countDownTime.diff(moment(), 'hours') % 24;
      const minutesLeft = countDownTime.diff(moment(), 'minutes') % 60;
      const secondsLeft = countDownTime.diff(moment(), 'seconds') % 60;
      
      setYear((yearsLeft < 0 ? yearsLeft * -1 : yearsLeft))
      setHour((hoursLeft < 0 ? hoursLeft * -1 : hoursLeft))
      setDay((daysLeft < 0 ? daysLeft * -1 : daysLeft))
      setMinute(minutesLeft < 0 ? minutesLeft * -1 : minutesLeft)
      setSecond(secondsLeft < 0 ? secondsLeft * -1 : secondsLeft)
      setCountDownTimeElapsed(secondsLeft < 0 || minutesLeft < 0 || hoursLeft < 0);
    }
  }, 1000);
  
  if (!shouldShowOverageTimer && countDownTime && countDownTime.isAfter(moment())) {
    clearInterval(clockInterval);
  }

  return (
    <React.Fragment>
      {
        hour !== undefined &&
        minute !== undefined &&
        second !== undefined &&
        <p 
          className="main" 
          style={{ 
            color: countDownTimeElapsed ? elapsedTimeColor : 'white',
            ...style
          }}
        >
          {
            (year && year > 0) 
              ? `${year}${shouldShowTimeUnits ? 'y' : ''}${ shouldShowSeparator ? ':' : ' '}` 
              : '' 
          }
          {
            (day && day > 0 && day < 100 && !shouldHidePrecedingZeros) 
              ? (
                day && day < 10 && !shouldHidePrecedingZeros 
                  ? `00${day}${shouldShowTimeUnits ? 'd' : ''}${ shouldShowSeparator ? ':' : ' '}` 
                  : `0${day}${day && shouldShowTimeUnits ? 'd' : ''}${ shouldShowSeparator ? ':' : ' '}`
              ) 
              : (
                day 
                  ? `${day}${shouldShowTimeUnits ? 'd' : ''}${ day && shouldShowSeparator ? ':' : ' '}` 
                  : '' 
              
              )
          }
          {
            hour && hour < 10 && !shouldHidePrecedingZeros
              ? `0${hour}${shouldShowTimeUnits ? 'h' : ''}`
              : `${hour}${shouldShowTimeUnits ? 'h' : ''}`
          }
          { shouldShowSeparator ? ':' : ' '}
          {
            minute && minute < 10 && !shouldHidePrecedingZeros 
              ? `0${minute}${shouldShowTimeUnits ? 'm' : ''}`
              : `${minute}${shouldShowTimeUnits ? 'm' : ''}`
          }
          { shouldShowSeparator ? ':' : ' '}
          {
            second && second < 10 
              ? `0${second}${shouldShowTimeUnits ? 's' : ''}` 
              : `${second}${shouldShowTimeUnits ? 's' : ''}` 
          }
        </p>
      }
    </React.Fragment>
  );
}

export default CountDownUp;