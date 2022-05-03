
import React, { useState } from "react"


const Increment = () => {

    const [value , setValue] = useState(0)
    
   const incrementCount = () =>{
       setValue(value + 1)
    }

    const decrementCount = () => {
        if(value>0) { setValue(value -1)}
        else{setValue(0)}
        
    }

    
    return (
     
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '300%',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '-15%',
      }}>
        Counter App
        <div style={{
          fontSize: '120%',
          position: 'relative',
          top: '10vh',
        }}>
          {value}
        </div>
        <div className="buttons">
          <button style={{
            fontSize: '60%',
            position: 'relative',
            top: '20vh',
            marginRight: '5px',
            backgroundColor: 'green',
            borderRadius: '8%',
            color: 'white',
          }}
            onClick={incrementCount}>Increment</button>
          <button style={{
            fontSize: '60%',
            position: 'relative',
            top: '20vh',
            marginLeft: '5px',
            backgroundColor: 'red',
            borderRadius: '8%',
            color: 'white',
          }}
            onClick={decrementCount}>Decrement</button>
        </div>
      </div>
    )
    
}

export default Increment