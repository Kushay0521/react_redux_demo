import React from 'react'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'
import store from '../redux/store'
import { Provider } from 'react-redux'

function ComponentA() {
  return (
    <>
        <Provider store={store}>
            <ComponentB/>
            <ComponentC/>
        </Provider>
    </>
  )
}

export default ComponentA