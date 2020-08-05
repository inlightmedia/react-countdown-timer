"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const moment_1 = __importDefault(require("moment"));
const CountDownUp = ({ shouldSwitchToTimerAfterCountdown = true, dateTime, timerTextColor = 'red', shouldShowTimeUnits = false, shouldShowSeparator = true, shouldHidePrecedingZeros = false, style, }) => {
    const [year, setYear] = react_1.useState();
    const [day, setDay] = react_1.useState();
    const [hour, setHour] = react_1.useState();
    const [minute, setMinute] = react_1.useState();
    const [second, setSecond] = react_1.useState();
    const [countDownTime, setCountDownTime] = react_1.useState();
    const [countDownTimeElapsed, setCountDownTimeElapsed] = react_1.useState(false);
    react_1.useEffect(() => {
        const ISO8601RegEx = /(\d{4})-(0[1-9]|1[0-2]|[1-9])-(\3([12]\d|0[1-9]|3[01])|[1-9])[tT\s]([01]\d|2[0-3]):(([0-5]\d)|\d):(([0-5]\d)|\d)([.,]\d+)?([zZ]|([+-])([01]\d|2[0-3]|\d):(([0-5]\d)|\d))$/;
        if (ISO8601RegEx.test(dateTime)) {
            if (moment_1.default(dateTime).isValid()) {
                setCountDownTime(moment_1.default(dateTime));
            }
            else {
                console.error('Error: Expected valid date. The date supplied conforms to ISO 8601 but is not a real date.');
            }
        }
        else {
            console.error('Error: Expected ISO8601 formatted string. See this example: 2020-07-25T21:22:19Z. For more information on ISO8601 read:  ');
        }
    }, []);
    const clockInterval = setInterval(() => {
        if (countDownTime) {
            const yearsLeft = countDownTime.diff(moment_1.default(), 'years');
            const daysLeft = countDownTime.diff(moment_1.default(), 'days') % 365;
            const hoursLeft = countDownTime.diff(moment_1.default(), 'hours') % 24;
            const minutesLeft = countDownTime.diff(moment_1.default(), 'minutes') % 60;
            const secondsLeft = countDownTime.diff(moment_1.default(), 'seconds') % 60;
            setYear((yearsLeft < 0 ? yearsLeft * -1 : yearsLeft));
            setHour((hoursLeft < 0 ? hoursLeft * -1 : hoursLeft));
            setDay((daysLeft < 0 ? daysLeft * -1 : daysLeft));
            setMinute(minutesLeft < 0 ? minutesLeft * -1 : minutesLeft);
            setSecond(secondsLeft < 0 ? secondsLeft * -1 : secondsLeft);
            setCountDownTimeElapsed(secondsLeft < 0 || minutesLeft < 0 || hoursLeft < 0);
        }
    }, 1000);
    if (!shouldSwitchToTimerAfterCountdown && countDownTime && countDownTime.isAfter(moment_1.default())) {
        clearInterval(clockInterval);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null, hour !== undefined &&
        minute !== undefined &&
        second !== undefined &&
        react_1.default.createElement("p", { className: "main", style: {
                color: countDownTimeElapsed ? timerTextColor : 'white',
                ...style
            } },
            (year && year > 0)
                ? `${year}${shouldShowTimeUnits ? 'y' : ''}${shouldShowSeparator ? ':' : ' '}`
                : '',
            (day && day > 0 && day < 100 && !shouldHidePrecedingZeros)
                ? (day && day < 10 && !shouldHidePrecedingZeros
                    ? `00${day}${shouldShowTimeUnits ? 'd' : ''}${shouldShowSeparator ? ':' : ' '}`
                    : `0${day}${day && shouldShowTimeUnits ? 'd' : ''}${shouldShowSeparator ? ':' : ' '}`)
                : (day
                    ? `${day}${shouldShowTimeUnits ? 'd' : ''}${day && shouldShowSeparator ? ':' : ' '}`
                    : ''),
            hour && hour < 10 && !shouldHidePrecedingZeros
                ? `0${hour}${shouldShowTimeUnits ? 'h' : ''}`
                : `${hour}${shouldShowTimeUnits ? 'h' : ''}`,
            shouldShowSeparator ? ':' : ' ',
            minute && minute < 10 && !shouldHidePrecedingZeros
                ? `0${minute}${shouldShowTimeUnits ? 'm' : ''}`
                : `${minute}${shouldShowTimeUnits ? 'm' : ''}`,
            shouldShowSeparator ? ':' : ' ',
            second && second < 10 && !shouldHidePrecedingZeros
                ? `0${second}${shouldShowTimeUnits ? 's' : ''}`
                : `${second}${shouldShowTimeUnits ? 's' : ''}`)));
};
exports.default = CountDownUp;
//# sourceMappingURL=CountDownTimer.js.map