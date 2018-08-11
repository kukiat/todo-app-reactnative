import React, { Component } from 'react'
import { View, TouchableOpacity, TextInput, Text } from 'react-native'
import globalStyles from '../styles'

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
    const { title, description } = this.state
    return(
      <View style={[globalStyles.layout, { padding: 25 }]}>
        <View style={{ flex: 1 }}>
          <Text style={[globalStyles.textDefault, { marginBottom: 15 }]}>Title</Text>
          <TextInput 
            style={globalStyles.textInput}
            value={title} 
            onChangeText={(value) => this.setState({ title: value})}
          />
        </View>
        <View style={{ flex: 5}}>
          <Text style={[globalStyles.textDefault, { marginBottom: 15 }]}>Description</Text>
          <TextInput 
            style={globalStyles.textArea}
            value={description} 
            onChangeText={value => this.setState({ description: value })}
          />
        </View>
        <TouchableOpacity 
          style={[globalStyles.buttonSuccess]}
          onPress={this.handleEdit}
        >
          <Text style={[globalStyles.textBold, { color: '#FFF' }]}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default EditTodo