import React, { Component } from 'react'
import { View, TouchableOpacity, TextInput, Text } from 'react-native'
import globalStyles from '../styles'
import { validate } from '../utils/validate'

class TodoEdit extends Component {
  static navigationOptions = {
    title: 'Edit',
  }

  constructor(props) {
    super(props)
    const { id, title, description } = this.props.navigation.state.params.todo
    this.state = {
      id,
      title,
      description,
      alert: {
        title: false,
        desc: false
      }
    }
  }
  
  validateForm = () => {
    const { title, description, alert } = this.state 
    const status = validate(title, description)
    if(!status.title || !status.description) {
      this.setState({ 
        alert: Object.assign(alert, { title: !status.title, desc: !status.description }) 
      })
      return true
    }
    return false
  }

  handleEdit = () => {
    const { editTodo } = this.props.navigation.state.params
    const { id, title, description } = this.state
    if(this.validateForm())
      return
    editTodo({ id, title, description })
  }

  render() {
    const { title, description, alert } = this.state
    return(
      <View style={[globalStyles.layout, { padding: 25 }]}>
        <View style={globalStyles.lineBottom}>
          <TextInput 
            multiline={true}
            style={[globalStyles.textInput, { color: '#3C3C3C' }]}
            value={title} 
            onChangeText={(value) => this.setState({ title: value})}
          />
          { alert.title && <Text style={globalStyles.alertText}>Title should be 5-25 charactors</Text> }
        </View>
        <View style={{ marginTop: 25, height: 250 }}>
          <TextInput 
            multiline={true}
            style={[globalStyles.textArea, { color: '#3C3C3C' }]}
            value={description} 
            onChangeText={value => this.setState({ description: value })}
          />
          { alert.desc && <Text style={globalStyles.alertText}>Description should be 10-300 charactors</Text> }
        </View>
        <TouchableOpacity 
          style={[globalStyles.buttonSuccess, { marginTop: 'auto' }]}
          onPress={this.handleEdit}
        >
          <Text style={[globalStyles.textBold, { color: '#FFF' }]}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default TodoEdit