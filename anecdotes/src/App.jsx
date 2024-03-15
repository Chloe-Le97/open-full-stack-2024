import { useState } from 'react'

const Button = (props) =>{
  return(
  <button onClick={props.handleClick}>{props.text}</button>
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
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
     0: 0, 
     1: 0, 
     2: 0, 
     3: 0, 
  })
  const [mostVote, setMostVote] = useState(0);

  const handleVote = () =>{
    const copyVote = {...votes};
    copyVote[selected] += 1;
    setVotes(copyVote);
    const mostVoteUpdated = Object.keys(copyVote).reduce((a, b) => copyVote[a] > copyVote[b] ? a : b);
    setMostVote(mostVoteUpdated);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

  const nextAnecdote = () =>{
    const randomNumber = getRandomInt(3);
    setSelected(randomNumber);
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} 
      <div>has {votes[selected]} votes</div>
      <div>
        <Button handleClick={handleVote} text='Vote'></Button>
        <Button handleClick={nextAnecdote} text='Next anecdote'></Button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <div>{anecdotes[mostVote]} </div>
      </div>
    </div>
  )
}

export default App