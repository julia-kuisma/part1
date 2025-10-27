import { useState } from 'react'

const Button = (props) => {
	return(
		<button onClick={props.onClick}>{props.text}</button>
	)
}

const Statistics = (props) => {
	const sum = props.good + props.neutral + props.bad;
	return(
		<>
			<p>good: {props.good}</p>
			<p>neutral: {props.neutral}</p>
			<p>bad: {props.bad}</p>
			<p>all: {sum}</p>
			<p>avarage: {(props.good - props.bad) / sum}</p>
			<p>positive: {props.good / sum * 100} %</p>
		</>
	)
}

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	return (
		<>
			<h1>Give feedback</h1>
			<Button onClick={() => setGood(good + 1)} text="good" />
			<Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
			<Button onClick={() => setBad(bad + 1)} text="bad" />
			<h2>Statistics</h2>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</>
	)
}

export default App