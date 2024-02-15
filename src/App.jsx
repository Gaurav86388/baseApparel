import './App.css';
import Information from './components/Information';
import {useState, useRef} from 'react'
function App() {
  const [success, setSuccess] =useState(false);
  const entered = useRef()
  function handleClick(event){
    event.preventDefault()
    let value = entered.current.value;

    if(value.includes('@') && value.includes('.')){
      setSuccess(true)
    }
    else{
      setSuccess(false)
    }
  }

  function handleOnInput(){
    setSuccess(false)
  }
  return (
            <main>
              <Information button_action = {handleClick} changeValue={entered} success={success} onInput={handleOnInput}/>
            </main>
  );
}

export default App;
