import React, { Component } from 'react';
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Todo from './Todo'
import Create from './Create'

const Router = createStackNavigator({
  Todo: { screen: Todo },
  Create: { screen: Create }
})

const App = () => {
  return (
    <Router/>
  )
}
export default App
