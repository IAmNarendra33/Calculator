import React from 'react'
import './componente/style.css'

const App = () => {
 const[result,setResult] = React.useState('');

const clickHandler=(event)=>{
  setResult(result.concat(event.target.value))
}
const clearDisplay=()=>{
  setResult('')
}
const caclulate=()=>{
  try {
    setResult(eval(result).toString());
  } catch (error) {
    setResult('')
  }
};


  return (
    
      <div className='calculator'>
        <input type='text' value={result} placeholder='0' id='answer' />
         <input type='button' value='9' className='btn' onClick={clickHandler}/>
         <input type='button' value='8' className='btn' onClick={clickHandler}/>
         <input type='button' value='7' className='btn' onClick={clickHandler}/>
         <input type='button' value='6' className='btn' onClick={clickHandler}/>
         <input type='button' value='5' className='btn' onClick={clickHandler}/>
         <input type='button' value='4' className='btn' onClick={clickHandler}/>
         <input type='button' value='3' className='btn' onClick={clickHandler}/>
         <input type='button' value='2' className='btn' onClick={clickHandler}/>
         <input type='button' value='1' className='btn' onClick={clickHandler}/>
         <input type='button' value='0' className='btn' onClick={clickHandler}/>
         <input type='button' value='.' className='btn' onClick={clickHandler}/>
         <input type='button' value='+' className='btn' onClick={clickHandler}/>
         <input type='button' value='-' className='btn' onClick={clickHandler}/>
         <input type='button' value='*' className='btn' onClick={clickHandler}/>
         <input type='button' value='%' className='btn' onClick={clickHandler}/>
         <input type='button' value='clear' className='btn1' onClick={clearDisplay} />
         <input type='button' value='=' className='btn2' onClick={caclulate}/>
        </div>
  
  )
}

export default App
