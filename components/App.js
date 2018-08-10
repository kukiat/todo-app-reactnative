import React, { Component } from 'react';
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Todo from './Todo'
import Create from './Create'
import TodoDetail from './TodoDetail'

const Router = createStackNavigator({
  Todo: { screen: Todo },
  Create: { screen: Create },
  TodoDetail:  { screen: TodoDetail }
})

const App = () => {
  return (
    <Router/>
  )
}
export default App
