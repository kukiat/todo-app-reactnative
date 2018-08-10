import React, { Component } from 'react'
import { View, Text } from 'react-native'

class TodoItem extends Component {
  render() {
    const { todo } = this.props
    return (
      <View>
        <Text 
          style={{
            height: 40,
            backgroundColor: '#FFF',
            marginTop: 5,
            fontSize: 20
          }}
        >
          {todo.title}
        </Text>
      </View>
    )
  }
}

export default TodoItem