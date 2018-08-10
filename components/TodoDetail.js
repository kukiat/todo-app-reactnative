import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class TodoDetail extends Component {

  handleDelete = () => {
    const { todo, deleteTodo } = this.props.navigation.state.params
    deleteTodo(todo.id)
    this.props.navigation.goBack()
  }

  handleEdit = () => {
    const { todo, editTodo } = this.props.navigation.state.params
    this.props.navigation.navigate('EditTodo', { todo, editTodo })
  }

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
            onPress={this.handleEdit}
          />
          <Button 
            title='Delete' 
            onPress={this.handleDelete}
          />
        </View>
      </View>
    )
  }
}

export default TodoDetail