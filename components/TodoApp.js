import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, AsyncStorage, ScrollView, Text } from 'react-native';
import TodoItem from './TodoItem'
import TodoFilter from './TodoFilter'
import globalStyles from '../styles'

class TodoApp extends Component {
  static navigationOptions = {
    title: 'TodoApp',
    headerStyle: {
      borderBottomWidth: 1,
      borderBottomColor: '#316084'
    }
  }
  
  state = {
    todos: [],
    filter: 'ALL'
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
    const id = todos.length ? todos[todos.length - 1].id + 1 : 0
    const date = new Date().toLocaleTimeString()
    this.setState({
      todos: [...todos, { 
          id, 
          title, 
          description,
          status: false,
          date: {
            created: date,
            lastUpdated: date
          }
        }
      ],
      filter: 'ALL'
    })
  }

  editTodo = ({ id, title, description }) => {
    const newTodos = [...this.state.todos]
    const index = newTodos.findIndex(todo => todo.id === id)
    newTodos[index].title = title
    newTodos[index].description = description
    newTodos[index].date.lastUpdated = new Date().toLocaleTimeString()
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

  switchFilter = (type) => {
    if(type === this.state.filter) 
      return
    this.setState({ filter: type })
  }

  filterTodos = (todos, filter) => {
    switch(filter) {
      case 'ALL':
        return todos
      case 'COMPLETE':
        return todos.filter(todo => todo.status === true)
      case 'ACTIVE':
        return todos.filter(todo => todo.status === false)
    }
  }

  checkTodo = ({ id, status }) => {
    const newTodos = [...this.state.todos]
    newTodos[newTodos.findIndex(todo => todo.id === id)].status = !status
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos, filter } = this.state
    const filterTodos = this.filterTodos(todos, filter)
    const { navigate } = this.props.navigation
    return (
      <View style={globalStyles.layout}>
        <TodoFilter filter={filter} switchFilter={this.switchFilter}/>
        <ScrollView style={{ marginTop: 4 }}>
          { filterTodos.map(todo => (
              <TodoItem 
                key={todo.id} 
                todo={todo} 
                checkTodo={this.checkTodo}
                onPress={() => navigate('TodoDetail', { 
                  todo, 
                  editTodo: this.editTodo,
                  deleteTodo: this.deleteTodo
                })}
              />
          ))}
        </ScrollView>
        <View style={{ paddingHorizontal: 15, paddingVertical: 5 }}>
          <TouchableOpacity 
            onPress={() => navigate('TodoCreate', {
              createTodo: this.createTodo
            })}
            style={globalStyles.buttonOriginal}
          >
            <Text style={[globalStyles.textBold, {color: '#FFF'}]}>Create Todo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TodoApp