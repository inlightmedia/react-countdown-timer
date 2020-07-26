# React Countdown Timer

## Usage

`yarn add @inlightmedia/react-countdown-timer`

Or

`npm install @inlightmedia/react-countdown-timer`

To use this timer, just pass in an ISO8601 formatted dateTime string.

For example:
> Some accepted ISO8601 formats:
>
> 2020-07-25T21:22:19Z (with UTC offset)
>
> 2020-08-27T23:12:15-04:00 (with timezone offset)

### Basic Usage

```jsx
<CountDownTimer countdownDateTime="20-07-25T21:22:19Z">
```

## Optional Properties

| Option                   | Description             | Default | Type |
|--------------------------|-------------------------|---------------|------|
| shouldShowOverageTimer   | If true, the counter will turn into a count-up timer when the count-down reaches zero   | true | boolean |
| elapsedTimeColor         | Colour with which to display the count-up timer text  | 'red' | string |
| shouldShowTimeUnits      | If true, this will show a letter representing the time unit after its respective number (e.g. 55m or 10h or 55s) | false | boolean |
| shouldShowSeparator      | If true, this will show the colon between time units. If false, a space will be used | true | boolean |
| shouldHidePrecedingZeros | If true, seconds, minutes, hours, and days will show preceding zeros (e.g. 003:02:02:05) | true | boolean |
| style                    | A style object can be passed in for inline css styles to be applied to the time text paragraph tag | {} | object |

## License

MIT © Joshua Dyck
