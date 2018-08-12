import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
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
        <View style={{ height: 40 }}>
          <Text style={[globalStyles.textHeader, { color: '#021312' }]}>{todo.title}</Text>
        </View>
        <View style={{ flex: 1, marginTop: 12 }}>
          <Text style={globalStyles.textDefault}>{todo.description}</Text>
        </View>
        <View style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#95a5a6', paddingTop: 15 }}>
          <TouchableOpacity 
            style={[styles.buttonHollow, { flex: 1, marginRight: 10 }]}
            onPress={this.handleEdit}
          >
            <Text style={[globalStyles.textBold, { color: '#F5BB52' }]}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[globalStyles.buttonOriginal, { flex: 1, backgroundColor: '#CA5C54' }]}
            onPress={this.handleDelete}
          >
            <Text style={[globalStyles.textBold, { color: '#FFF' }]}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonHollow: {
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#F5BB52',
    height: 40,
    justifyContent: 'center',
  },
  lignTop: {
    borderBottomWidth: 1, 
    borderBottomColor: '#95a5a6'
  }
})
export default TodoDetail