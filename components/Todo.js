import React, { Component } from 'react';
import { StyleSheet, View, Button, TouchableOpacity, AsyncStorage } from 'react-native';
import TodoItem from './TodoItem'
import CheckBox from 'react-native-check-box'
import FilterTodo from './FilterTodo'

class Todo extends Component {
  static navigationOptions = {
    title: 'Home'
  }
  constructor(props) {
    super(props)
    this.state = {
      todo: []
    }
  }

  async componentDidMount() {
    try {
      const todos = await AsyncStorage.getItem('todos')
      if(todos === null) {
        await AsyncStorage.setItem('todos', JSON.stringify([]))
      }else {
        this.setState({ todos: JSON.parse(todos) })
      }
    }catch(err) {
      alert(err)
    }
  }

  async componentDidUpdate() {
    await AsyncStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

  createTodo = ({ title, description }) => {
    const { todos } = this.state
    this.setState({
      todos: [ ...todos, { 
          id: todos.length, 
          title, 
          description,
          status: false
        }
      ]
    })
  }

  
  editTodo = ({ id, title, description }) => {
    const newTodos = [...this.state.todos]
    const index = newTodos.findIndex(todo => todo.id === id)
    newTodos[index].title = title
    newTodos[index].description = description
    this.setState({ todos: newTodos })
    this.props.navigation.navigate('TodoDetail', { 
      todo: this.state.todos[index], 
      editTodo: this.editTodo,
      deleteTodo: this.deleteTodo
    })
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
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <FilterTodo filterTodos={this.filterTodos}/>
        <View style={{ marginTop: 20 }}>
          { todos.map(todo => (
            <TouchableOpacity 
              key={todo.id} 
              style={styles.todoItem}
              onPress={() => navigate('TodoDetail', { 
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
          onPress={() => navigate('Create', {
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
