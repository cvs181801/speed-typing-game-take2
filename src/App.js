import React, {useState} from 'react'

function App() {

  const [textAreaText, setTextAreaText] = useState('')

  function handleChange(event) {
    event.preventDefault();
     const {value} = event.target
     setTextAreaText(value)
  }


//   function getWordCount() { 
//     const countWordsArray = [...textAreaText];
//     console.log(countWordsArray)
//     const wordsArray = countWordsArray.join('');
//     console.log(wordsArray)
//     //const aWord = wordsArray.indexOf(" ")
//     //console.log(aWord)
//     const newWord = wordsArray.slice(wordsArray.indexOf(" "));
//     console.log(newWord)
//   }

let count = 0;
  function getWordCount2(array) {
      if (array.length == 0) { 
        return count;
    } else {
        array.slice(array.indexOf(" "));
        count = count + 1;
        console.log(count);
        console.log(array);
        return getWordCount2(array)
      }
  }

  //console.log(getWordCount2(["this is a test"]))

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
      <h4>Seconds Remaining:</h4>
      <button>Start!</button>
      <button
        //onClick={getWordCount}
      >get count</button>
      <h1>Word Count:</h1>
    </div>
  );
}

export default App;
