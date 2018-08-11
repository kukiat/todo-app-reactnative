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
        <View style={globalStyles.titleInput}>
          <TextInput 
            style={[globalStyles.textInput, { color: '#3C3C3C' }]}
            value={title} 
            onChangeText={(value) => this.setState({ title: value})}
          />
        </View>
        <View style={{ flex: 6, marginTop: 20 }}>
          <TextInput 
            style={[globalStyles.textArea, { color: '#3C3C3C' }]}
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