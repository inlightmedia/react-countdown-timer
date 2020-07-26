import React from 'react';

import CountDownTimer from '../src/index';

const Example = () => {
  return (
    <div style={{ backgroundColor:'rgb(50,50,50)', fontSize: '4em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CountDownTimer 
        shouldShowSeparator={false}
        shouldShowTimeUnits={true}
        shouldHidePrecedingZeros={true}
        elapsedTimeColor="rgb(255, 0, 0)" 
        countDownDateTime="2022-08-25T23:19:19Z" 
      />
    </div>
  );
}

export default Example;
