import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import globalStyles from '../styles'

class TodoDetail extends Component {
  static navigationOptions = {
    title: 'Detail'
  }
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
      <View style={[globalStyles.layout, { padding: 25 }]}>
        <View style={{ height: 40, borderBottomWidth: 1, borderBottomColor: '#b3c9db' }}>
          <Text style={[globalStyles.textHeader, { color: '#021312' }]}>{todo.title}</Text>
        </View>
        <View style={{ flex: 1, marginTop: 12 }}>
          <Text style={globalStyles.textDefault}>{todo.description}</Text>
        </View>
        <Button 
            title='Edit' 
            onPress={this.handleEdit}
        />
          <Button 
            title='Delete' 
            onPress={this.handleDelete}
          />
      </View>
    )
  }
}

export default TodoDetail