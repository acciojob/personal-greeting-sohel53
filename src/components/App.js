
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [name, setName] = useState("");

  function handleChange(event){
    setName(event.target.name)
  }


  return (

    <div>
        {/* Do not remove the main div */}
        <p>Enter your Name:</p>
        <input type="text" onChange={handleChange} />
        <p>{name}</p>
    </div>
  )
}

export default App
