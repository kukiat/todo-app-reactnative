import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { id: 0, title: 'todstodstods', description: 'Prebid Adds Support for Mobile App Header', status: false },
        { id: 1, title: 'Lorem Ipsum', description: 'Prebid Adds Support for Mobile App Header', status: false },
        { id: 2, title: 'todstLorem odstods', description: 'Prebid Adds Support for Mobile App Header', status: false },
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

  render() {
    const { todos } = this.state
    return (
      <View style={styles.container}>
        { todos.map(todo => (
          <Text key={todo.id} style={styles.todoItem}>{todo.title}</Text>
        ))}
        <Button 
          title='CREATE'
          style={styles.createButton}
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
});

export default Todo
