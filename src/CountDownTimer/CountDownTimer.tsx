/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import moment, { Moment } from 'moment'

interface ComponentProps {
  shouldShowOverageTimer?: boolean;
  countDownDateTime: string;
  style?: object;
}

const CountDownUp: React.FunctionComponent<ComponentProps> = ({ 
  shouldShowOverageTimer = true,
  countDownDateTime,
  style,
}) => {
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
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
      const hoursLeft = countDownTime.diff(moment(), 'hours') % 24;
      const minutesLeft = countDownTime.diff(moment(), 'minutes') % 60;
      const secondsLeft = countDownTime.diff(moment(), 'seconds') % 60;
      
      setHour((hoursLeft < 0 ? hoursLeft * -1 : hoursLeft))
      setMinute(minutesLeft < 0 ? minutesLeft * -1 : minutesLeft)
      setSecond(secondsLeft < 0 ? secondsLeft * -1 : secondsLeft)
      setCountDownTimeElapsed(secondsLeft < 0);
    }
  }, 1000);
  
  if (!shouldShowOverageTimer && countDownTime && countDownTime.isAfter(moment())) {
    clearInterval(clockInterval)
  }

  return (
    <p 
      className="main" 
      style={{ 
        fontSize: '1em', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        color: countDownTimeElapsed ? 'red' : 'white',
        ...style
      }}
    >
      { hour < 10 ? `0${hour}`: hour}:{minute < 10 ? `0${minute}` : minute}:{second < 10 ? `0${second}` : second }
    </p>
  );
}

export default CountDownUp;
