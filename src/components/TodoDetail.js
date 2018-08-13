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
    this.props.navigation.navigate('TodoEdit', { todo, editTodo })
  }

  render() {
    const { todo } = this.props.navigation.state.params
    return (
      <View style={[globalStyles.layout, { padding: 25 }]}>
        <View style={[styles.lineTop, { height: 40 }]}>
          <Text style={[globalStyles.textHeader, { color: '#021312' }]}>{todo.title}</Text>
        </View>
        <View style={{ flex: 1, marginTop: 12 }}>
          { todo.date.created === todo.date.lastUpdated ? 
            <Text style={styles.textSmall}>Created {todo.date.created}</Text> 
            : <Text style={styles.textSmall}>Last Edited {todo.date.lastUpdated}</Text>
          }
          <Text style={[globalStyles.textDefault, { marginTop: 15 }]}>{todo.description}</Text>
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
  lineTop: {
    borderBottomWidth: 1, 
    borderBottomColor: '#95a5a6'
  },
  textSmall: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#3498db'
  }
})
export default TodoDetail