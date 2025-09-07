import { useState } from 'react'
import './App.css'

function App() {

   
  return (
    <div>
      <Todo title='go to hym' description='gdg' done = {true} />
    </div>
  )
}


interface TodoProp{
  title : string,
  description : string ,
  done : boolean
}

function Todo({
  title,
  description, 
  done
} : TodoProp){
  return <div>
<h1>
    {title}
  </h1>
  <h1>
    {description}
  </h1>
  <p>
    
      {done ? " completed"  : "not complted"}
    
  </p>
  </div>
  
}

export default App



// to create a react component that takes todos as input and renders them 
