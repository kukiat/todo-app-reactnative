import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class TodoList extends Component {
  render() {
    const { todo } = this.props.navigation.state.params
    return (
      <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
        <Text>{todo.id}</Text>
        <Text>{todo.title}</Text>
        <Text>{todo.description}</Text>
        <View style={{ flex:1, flexDirection: 'row'}}>
          <Button 
            title='Edit' 
            onPress={() => alert('xxxx')}
          />
          <Button 
            title='Delete' 
            onPress={() => alert('xxxx')}
          />
        </View>
      </View>
    )
  }
}

export default TodoList