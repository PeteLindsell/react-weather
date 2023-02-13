import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

const UserInteraction = ({setLocation, errorOccurred, error, errorMessage}) => {
  console.log(`UserInteraction function ran`);
  
  const [input, setInput] = useState("");
  const [formError, setFormError] = useState("");
  // ^ the state string that comes from the input text field

  return (
    <div id="interaction">
      <input 
        type="text"
        id="interaction-input"
        placeholder="Enter a location..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(event) => {
          if(event.key === "Enter") {
            setLocation(input);
            setInput("");
          }}}
      />
      <button
        id="interaction-button"
        onClick={() => {
          if (!input) return setFormError("Please enter value")
          setLocation(input);
          setInput("");
        }}>
        Check The Weather
      </button>
        {!!error && <div>{errorMessage}</div>}
        {!!formError && <div>{formError}</div>}
        
      <ErrorMessage errorOccurred={errorOccurred}/>
    </div>
  );
};

export default UserInteraction;