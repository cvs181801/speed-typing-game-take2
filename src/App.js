import React, {useState, useEffect} from 'react'

export default function App() {

  const [textAreaText, setTextAreaText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(10)
  const [gameStart, setGameStart] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  function handleChange(event) {
    event.preventDefault();
     const {value} = event.target
     setTextAreaText(value)
  }

  function getWordCount() { 
    let words = textAreaText.replace(/\s{2,}/g, ' ').trim()
    console.log(words)
    let wordsArray = words.split(' ');
    console.log(wordsArray)
    const numOfWords = wordsArray.filter(word => word !== '').length;
    setWordCount(numOfWords)
    console.log(numOfWords)
    console.log(wordCount)
  }

  function handleGameStart() {
    setTextAreaText('')
    setGameStart(true)
    setTimeRemaining(10)
  }

  useEffect(()=> {
     if (gameStart && timeRemaining > 0) {
      setWordCount(0)
        setTimeout(function() {
            setTimeRemaining(prevTime => prevTime - 1)
        }, 1000)  
     } else {
      setGameStart(false)
      getWordCount()
  }
    },[timeRemaining, gameStart])
  

  return (
    <div className="App">
      <h1>How Fast Can You Type?
      </h1>
      <textarea
        style={{width: '50%', height: '20em'}}
        placeholder="Begin typing here"
        name="textarea"
        value={textAreaText}
        onChange={handleChange}
        disabled ={gameStart === false}
      />
      <h4>Seconds Remaining: {timeRemaining}</h4>
      <button
        onClick={handleGameStart}
        disabled={gameStart === true}
      >Start!</button>
      <h1>Word Count: {wordCount} </h1>
    </div>
  );
}


