import React from 'react'
import { useState } from 'react'


const Button = ({ increment, onClickFunction }) =>  {
    const handleClick = () => {
        onClickFunction(increment)
    }
    return <button onClick={handleClick}>+{increment}</button>
}

const Counter = () => {
    const [count, setCount] = useState(0)
    
    const incrementCount = increment => {
        setCount(count + increment)
    }
    
    return (
        <div>
            <Button increment={1} onClickFunction={incrementCount}/>
            <span>{count}</span>
        </div>
    )
}

export default Counter
