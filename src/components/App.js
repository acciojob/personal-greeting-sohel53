
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [name, setName] = useState("");

  function handleChange(event){
    setName(event.target.value);
  }


  return (

    <div>
        {/* Do not remove the main div */}
        <p>Enter your Name:</p>
        <input type="text" onChange={handleChange} />
        <p>Hello {name}!</p>
    </div>
  )
}

export default App
