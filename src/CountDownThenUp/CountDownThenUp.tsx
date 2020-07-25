import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import moment, { Moment } from 'moment'

const getCountDownTime = () => {
  return moment().add(10, 'seconds');
}

interface ComponentProps {
  shouldShowOverageTime?: boolean;
}

const CountDownUp: React.FunctionComponent<ComponentProps> = ({ shouldShowOverageTime = true }) => {
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [countDownTime, setCountDownTime] = useState<Moment>();
  const [countDownTimeElapsed, setCountDownTimeElapsed] = useState<boolean>(false);

  useEffect(() => {
    setCountDownTime(getCountDownTime())
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
  
  if (!shouldShowOverageTime && countDownTime && countDownTime.isAfter(moment())) {
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
        color: countDownTimeElapsed ? 'red' : 'white' 
      }}
    >
      {hour < 10 ? `0${hour}`: hour}:{minute < 10 ? `0${minute}` : minute}:{second < 10 ? `0${second}` : second}
    </p>
  );
}

export default CountDownUp;
