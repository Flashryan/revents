import React from 'react';
import TestReducer, {increment, decrement } from './testReducer.js';
import {useSelector, useDispatch} from 'react-redux';
import {Button} from 'semantic-ui-react'

export default function Sandbox(){

    const dispatch = useDispatch();
    const data = useSelector(state => state.test.data);

    return (
        <>
        <h1>test</h1>
    <h3>{data}</h3>
      <Button onClick={() => dispatch(increment(20)) } content='Increment' color='green' />
      <Button onClick={() => dispatch(decrement(10)) } content='Decrement' color='red' />
        </>
    )
}