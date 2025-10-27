import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
		{props.text}
    </button>
  )
}

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.'
	];

	let max;

	const [votes, setVotes] = useState([0,0,0,0,0,0,0,0]);
	
	const [selected, setSelected] = useState(0);

	const [maxVotes, setMaxvotes] = useState(0);

	function handleRandomNumber() {
		let random = Math.floor(Math.random() * anecdotes.length);
		setSelected(random);
	}

	function handleVoting() {
		let copy = {...votes};
		copy[selected] += 1;
		setVotes(copy);

		const values = Object.values(copy);
		const maxIndex = values.indexOf(Math.max(...values));
		setMaxvotes(maxIndex);
	}

	return (
		<>
			<h1>Anecdote of the day</h1>
			<p>
				{anecdotes[selected]}
			</p>
			<p>Votes: {votes[selected]}</p>
			<Button onClick={handleVoting} text="vote" />
			<Button onClick={handleRandomNumber} text="Next Anecdote" />
			<h2>Anecdote with most votes</h2>
			<p>{anecdotes[maxVotes]}<br/> votes: {votes[maxVotes]}</p>
		</>
	)
}

export default App