import { useState } from 'react'

const Button = (props) => {
	return(
		<button onClick={props.onClick}>{props.text}</button>
	)
}

const StatisticsLine = (props) => {
	return(
		<tr>
			<td>{props.text}</td>
			<td>{props.value}</td>
		</tr>
	)
}

const Statistics = (props) => {
	const sum = props.good + props.neutral + props.bad;
	const avarage = (props.good - props.bad) / sum;
	const positive = props.good / sum * 100;
	if (sum == 0) {
		return(
			<p>No feedback given</p>
		)
	}
	return(
		<table>
			<tbody>
				<StatisticsLine text="good" value={props.good} />
				<StatisticsLine text="neutral" value={props.neutral} />
				<StatisticsLine text="bad" value={props.bad} />
				<StatisticsLine text="all" value={sum} />
				<StatisticsLine text="avarage" value={avarage} />
				<StatisticsLine text="positive" value={positive+" %"} />
			</tbody>
		</table>
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