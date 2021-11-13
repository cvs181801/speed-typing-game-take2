import React, {useState} from 'react'

function App() {

  const [textAreaText, setTextAreaText] = useState('')

console.log(textAreaText.textarea)

  function handleChange(event) {
    const {name, value} = event.target
    setTextAreaText(prevTextAreaText => {
      return {
        ...prevTextAreaText,
        [name]:value
      }
    })
  }

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
      <h1>Word Count:</h1>
    </div>
  );
}

export default App;
