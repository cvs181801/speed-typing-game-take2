import React, {useState, useEffect} from 'react'

export default function App() {

  const [textAreaText, setTextAreaText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [gameStart, setGameStart] = useState(false)

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
    return wordsArray.filter(word => word !== '').length
  }

   useEffect(()=> {
     if (timeRemaining > 0) {
        setTimeout(function() {
          setTimeRemaining(prevTime => prevTime - 1)
        }, 1000)  
     }  
    },[timeRemaining])



// const string = " this contains   spaces ";    
// const newString = string.replace(/\s{2,}/g, ' ').trim() 
// console.log(newString)

//  //let array = ["this is a test"];
//  let count = 0;
//  let array = ["this is a test"];
//    function getWordCount2(array, count) {
//     let wordArray = array.indexOf(" ");
//       if (wordArray >= 0) { 
//         return 'no spaces';
//     } else {
//       //return 'spaces'
//       console.log(array);
      
//          //count = count + 1;
//         //return {count: count, array: array}
//          //getWordCount2(array, count)    
//     }
//   }

//   console.log(getWordCount2(array, count))

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
      />
      <h4 
        render={()=>{}}
      >Seconds Remaining: {timeRemaining}</h4>
      <button>Start!</button>
      <button
        onClick={getWordCount}
      >get count</button>
      <h1
        //render={getWordCount(textAreaText)}
      >Word Count:  </h1>
    </div>
  );
}


