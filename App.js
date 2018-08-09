import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
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

  
  render() {
    const { todos } = this.state
    return (
      <View style={styles.container}>
        { todos.map(todo => (
          <Text key={todo.id} style={styles.welcome}>{todo.title}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
