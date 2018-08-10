import React, { Component } from 'react'
import { View, Button, StyleSheet, TextInput } from 'react-native'

class Create extends Component {
  state = {
    title: '',
    description: ''
  }

  handleCreate = () => {
    const { title, description } = this.state 
    const { createTodo } = this.props.navigation.state.params
    createTodo({
      title, description
    })
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={style.createContainer}>
        <TextInput 
          style={{height: 30, borderColor: 'gray', borderWidth: 1, marginBottom: 10}}
          placeholder='Title'
          onChangeText={(value) => this.setState({ title: value})}
        />
        <TextInput 
          style={{ height: 50, borderColor: 'grey', borderWidth: 2, marginBottom: 10}}
          placeholder='Description'
          onChangeText={(value) => this.setState({ description: value})}
        />
        <Button title='Submit' onPress={this.handleCreate}/>
      </View>
    )
  }
}

const style = StyleSheet.create({
  createContainer: {
    flex: 1,
    color: '#00FF00',
    padding: 10,
  }
})

export default Create