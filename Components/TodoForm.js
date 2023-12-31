import React, {useState,useEffect,useRef} from 'react'

function TodoForm(props) {
    const [input,setInput]=useState('');
    const inputRef=useRef(null);
    useEffect(()=>{
      inputRef.current.focus()
    })

    const handleSubmit= e =>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*1000),
            text:input
        });
        
    };
    const handleChange = e => {
     setInput(e.target.value);
    };
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type='text' placeholder='Add a Todo' value={input} name='text' 
      className='todo-input' onChange={handleChange}
        ref={inputRef}
      />
      <button className='todo-button'>Add a Todo</button>
    </form>
  )
}

export default TodoForm

