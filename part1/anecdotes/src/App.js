import React, { useState } from 'react'

const Button = ({clickHandle,text}) => 
  <button onClick={clickHandle}>{text}</button> 

  const MostVotesAnec = ({pinnedAnec,max}) => {
    return (<div>
    <p>{pinnedAnec}</p>
    <p>has {max} votes</p>
    </div>)
  }

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  let ary = new Uint8Array(anecdotes.length)
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(ary)
  // const [maxVotes,setMaxVotes] = useState(0)

  const randomAnec = () => {
    let num = anecdotes.length
    let randomNum = Math.floor(Math.random()*num)
    setSelected(randomNum)
  }

  const addVote = () => {
    let newVotes = [...votes]
    newVotes[selected] = newVotes[selected]+1
    setVotes(newVotes)
  }

  let max = Math.max(...votes)
  let pinnedInd = votes.findIndex(x => x===max)
  let pinnedAnec = anecdotes[pinnedInd]
  console.log(max,votes,pinnedInd)

  return (
    <div>
    <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button clickHandle={randomAnec} text='Next Anecdote' />
      <Button clickHandle={addVote} text='Vote' />
    <h1>Anecdote with the most votes</h1>
    <MostVotesAnec pinnedAnec={pinnedAnec} max={max} />

    </div>
  )
}

export default App
