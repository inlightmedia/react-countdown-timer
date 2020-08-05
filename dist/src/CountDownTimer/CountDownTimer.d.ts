import React from 'react';
interface ComponentProps {
    shouldSwitchToTimerAfterCountdown?: boolean;
    dateTime: string;
    timerTextColor?: string;
    shouldShowTimeUnits?: boolean;
    shouldShowSeparator?: boolean;
    shouldHidePrecedingZeros?: boolean;
    style?: object;
}
declare const CountDownUp: React.FunctionComponent<ComponentProps>;
export default CountDownUp;
