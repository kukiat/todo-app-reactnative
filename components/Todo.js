import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Switch } from 'react-native';
import TodoItem from './TodoItem'
import CheckBox from 'react-native-check-box'
import FilterTodo from './FilterTodo'

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
    this.setState({
      todos: [ ...this.state.todos, { 
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
    this.setState({ todos: newTodos })
  }

  filterTodos = (type) => {
    const { todos } = this.state
    switch(type) {
      case 'ALL':
        break;
      case 'COMPLETE':
        break;
      case 'ACTIVE':
        break;
    }
  }

  checkTodo = ({ id, status }) => {
    const newTodos = [...this.state.todos]
    newTodos[newTodos.findIndex(todo => todo.id === id)].status = !status
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <View style={styles.container}>
        <FilterTodo/>
        <View style={{ marginTop: 20 }}>
          { todos.map(todo => (
            <TouchableOpacity 
              key={todo.id} 
              style={styles.todoItem}
              onPress={() => this.props.navigation.navigate('TodoDetail', { 
                todo, 
                editTodo: this.editTodo,
                deleteTodo: this.deleteTodo
              })}
            >
              <CheckBox isChecked={ todo.status } onClick={() => this.checkTodo(todo)}/>
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
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#FFF',
    marginTop: 5,
    fontSize: 20,
  },
  createButton: {
    textAlign: 'center',
    color: '#FFF',
    backgroundColor: '#3B95F7'
  }
});

export default Todo
