import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Switch } from 'react-native';
import TodoItem from './TodoItem'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { id: 0, title: 'todstodstods', description: 'Prebid Adds Support for Mobile App Header', status: false },
        { id: 1, title: 'Lorem Ipsum', description: 'Prebid Adds Support for Mobile App Header', status: false },
        { id: 5, title: 'todstLorem odstods', description: 'Prebid Adds Support for Mobile App Header', status: false },
      ]
    }
  }

  createTodo = ({ title, description }) => {
    const { todos } = this.state
    this.setState({
      todos: [ 
        ...todos, { 
          id: todos.length, 
          title, 
          description,
          status: false
        }
      ]
    })
  }

  editTodo = () => {

  }

  deleteTodo = (id) => {
    const newTodos = [...this.state.todos]
    const indexTodo = newTodos.findIndex(todo => todo.id === id)
    newTodos.splice(indexTodo, 1)
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const { todos } = this.state
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justtidyContent: 'spaces-round'}}>
          <TouchableOpacity style={styles.filterBtn}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterBtn}>
            <Text>Complete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterBtn}>
            <Text>Active</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          { todos.map(todo => (
            <TouchableOpacity 
              key={todo.id} 
              onPress={() => this.props.navigation.navigate('TodoDetail', { 
                todo, 
                editTodo: this.editTodo,
                deleteTodo: this.deleteTodo
              })}
            >
              <TodoItem todo={todo}/>
            </TouchableOpacity>
          ))}
        </View>
        <Button 
          title='CREATE'
          style={{ flex: 1 }}
          onPress={() => this.props.navigation.navigate('Create', {
            createTodo: this.createTodo
          })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  todoItem: {
    height: 40,
    backgroundColor: '#FFF',
    marginTop: 5,
    fontSize: 20,
  },
  createButton: {
    textAlign: 'center',
    color: '#FFF',
    backgroundColor: '#3B95F7',

  },
  filterBtn: {
    width: 80,
    height: 30,
    borderWidth: 1,
    borderRadius: 5
  }
});

export default Todo
