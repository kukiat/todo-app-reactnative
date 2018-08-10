import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

class EditTodo extends Component {
  static navigationOptions = {
    title: 'Edit'
  }

  constructor(props) {
    super(props)
    const { id, title, description } = this.props.navigation.state.params.todo
    this.state = {
      id,
      title,
      description
    }
  }
  
  handleEdit = () => {
    const { editTodo } = this.props.navigation.state.params
    const { id, title, description } = this.state
    editTodo({ id, title, description })
  }

  render() {
    const { id, title, description } = this.state
    return(
      <View>
        <TextInput 
          value={title} 
          onChangeText={(value) => this.setState({ title: value})}
        />
        <TextInput 
          value={description} 
          onChangeText={value => this.setState({ description: value })}
        />
        <Button 
          title='Submit' 
          onPress={this.handleEdit}
        />
      </View>
    )
  }
}

export default EditTodo