# React Countdown Timer

![demo-image](./README-DEMO.gif)

## Install

`yarn add @inlightmedia/react-countdown-timer`

or

`npm install @inlightmedia/react-countdown-timer`

## Basic Usage

Just pass in a dateTime prop with an ISO 8601 formatted time string and you'll get all the default functionality out-of-the-box. If you use a future date and time it will count down. If you use a past date and time it will count up. By default, when it finishes counting down it will begin to count up.

```jsx
<CountDownTimer dateTime="20-07-25T21:22:19Z">
```

> Note: To use this countdown/timer, you'll need to use an ISO 8601 formatted dateTime string.

> Examples:
>
> 2020-07-25T21:22:19Z (with UTC offset)
>
> 2020-08-27T23:12:15-04:00 (with timezone offset)

## Optional Properties

| Option                              | Description                                                                                                      | Default | Type    |
|-------------------------------------|------------------------------------------------------------------------------------------------------------------|---------|---------|
| shouldSwitchToTimerAfterCountdown   | If true, the counter will turn into a count-up timer when the count-down reaches zero                            | true    | boolean |
| timerTextColor                      | Colour with which to display the count-up timer text                                                             | 'red'   | string  |
| shouldShowTimeUnits                 | If true, this will show a letter representing the time unit after its respective number (e.g. 55m or 10h or 55s) | false   | boolean |
| shouldShowSeparator                 | If true, this will show the colon between time units. If false, a space will be used                             | true    | boolean |
| shouldHidePrecedingZeros            | If true, seconds, minutes, hours, and days will show preceding zeros (e.g. 003:02:02:05)                         | true    | boolean |
| style                               | A style object can be passed in for inline css styles to be applied to the time text paragraph tag               | {}      | object  |

## License

MIT © Joshua Dyck
