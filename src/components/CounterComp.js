import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counter';

function CounterComp() {

    const count = useSelector((state) => state.counter.value )
    const dispatch = useDispatch()

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())} >+</button>
        <button onClick={() => dispatch(decrement())} >-</button>
    </div>
  )
}

export default CounterComp