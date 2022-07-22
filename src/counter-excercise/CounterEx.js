import React, { useState } from "react";
import './counter-style.css'

const CounterApp = () => {
    const [count, setCount] = useState(0)
    
    function increment() {
        setCount((prevCount => prevCount + 1))
    }
    function decrement() {
        setCount((prevCount => prevCount - 1))
    }
    return (
        <div>
            <h2 className="count">{ count}</h2>
            <div className="counter-btn-cont">
                <div className="counter-btn increment" onClick={increment}>+</div>
                <div className="counter-btn decrement" onClick={decrement}>-</div>
            </div>
        </div>
    )
}

export default CounterApp;