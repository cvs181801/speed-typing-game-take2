import React, {useState, useEffect} from 'react'
//import keyboardImage from './90skeyboard.jpeg'
//import image from './1990s.jpeg'

export default function App() {

  const [textAreaText, setTextAreaText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(60)
  const [gameStart, setGameStart] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  function handleChange(event) {
    event.preventDefault();
     const {value} = event.target
     setTextAreaText(value)
  }

  function getWordCount() { 
    let words = textAreaText.replace(/\s{2,}/g, ' ').trim()
    let wordsArray = words.split(' ');
    const numOfWords = wordsArray.filter(word => word !== '').length;
    setWordCount(numOfWords)
  }

  function handleGameStart() {
    setTextAreaText('')
    setGameStart(true)
    setTimeRemaining(60)
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
    <div 
      className="App"
      //styles={{backgroundImage: `url${image}`}}
    >
      <h1
        className="header1"
      >🌴 It's 1995 and you're on dial-up. 🌴</h1>  
      <h2
        className="header2"
      >Try to type the Hacker's Manifesto quote from the Mentor before your mom walks into the room!</h2>
      
      <textarea
        style={{width: '50%', height: '20em'}}
        placeholder="Click the Start button to start typing here!"
        name="textarea"
        value={textAreaText}
        onChange={handleChange}
        disabled ={gameStart === false}
      />
      <div
        className="keyboard"
        //styles={{backgroundImage: `url${keyboardImage}`}}
      >
      <h4>Seconds Remaining: {timeRemaining}</h4>
      <button 
        className="button"
        onClick={handleGameStart}
        disabled={gameStart === true}
      >Start!</button>
      <h1>Word Count: {wordCount} </h1>
      

      <p className="manifesto">This is our world now... the world of the electron and the switch, the
          beauty of the baud.  We make use of a service already existing without paying
          for what could be dirt-cheap if it wasn't run by profiteering gluttons, and
          you call us criminals.  We explore... and you call us criminals.  We seek
          after knowledge... and you call us criminals.  We exist without skin color,
          without nationality, without religious bias... and you call us criminals.
          You build atomic bombs, you wage wars, you murder, cheat, and lie to us
          and try to make us believe it's for our own good, yet we're the criminals.

                  Yes, I am a criminal.  My crime is that of curiosity.  My crime is
          that of judging people by what they say and think, not what they look like.
          My crime is that of outsmarting you, something that you will never forgive me
          for.

                  I am a hacker, and this is my manifesto.  You may stop this individual,
          but you can't stop us all... after all, we're all alike.  

                                        +++The Mentor+++</p>
          </div>
    </div>
  );
}



