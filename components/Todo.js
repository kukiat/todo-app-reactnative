import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, AsyncStorage, ScrollView, Text } from 'react-native';
import TodoItem from './TodoItem'
import CheckBox from 'react-native-check-box'
import FilterTodo from './FilterTodo'
import globalStyle, { BACKGROUND_COLOR } from '../styles'

class Todo extends Component {
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
    this.setState({
      todos: [...todos, { 
          id, 
          title, 
          description,
          status: false
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
      <View style={styles.container}>
        <FilterTodo filter={filter} switchFilter={this.switchFilter}/>
        <ScrollView style={{marginTop: 4}}>
          { filterTodos.map(todo => (
              <TouchableOpacity 
                key={todo.id} 
                style={styles.todoItem}
                onPress={() => navigate('TodoDetail', { 
                  todo, 
                  editTodo: this.editTodo,
                  deleteTodo: this.deleteTodo
                })}
              >
                <CheckBox 
                  style={{ marginHorizontal: 10 }} 
                  checkBoxColor='#EC5A65'
                  isChecked={ todo.status } 
                  onClick={() => this.checkTodo(todo)}
                />
                <TodoItem todo={todo}/>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={{ paddingHorizontal: 15, paddingVertical: 5 }}>
          <TouchableOpacity 
            onPress={() => navigate('Create', {
              createTodo: this.createTodo
            })}
            style={globalStyle.buttonOriginal}
          >
            <Text style={[globalStyle.textBold, {color: '#FFF'}]}>Create Todo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  todoItem: {
    flexDirection: 'row',
    height: 46,
    backgroundColor: '#FFF',
    marginBottom: 4,
    alignItems: 'center',
    fontSize: 20,
  }
});

export default Todo
