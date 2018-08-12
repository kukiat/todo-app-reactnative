import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import globalStyles from '../styles'
import { validate } from '../utils/validate'

class TodoCreate extends Component {
  state = {
    title: '',
    description: '',
    date: '',
    colorText: '#D9D9D9',
    alert: {
      title: false,
      desc: false
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

  handleCreate = () => {
    const { title, description } = this.state 
    if(this.validateForm()) return
    const { createTodo } = this.props.navigation.state.params
    const date = new Date()
    createTodo({
      title, 
      description,
      date: `${date.toLocaleString()}`
    })
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={[globalStyles.layout, { flex: 1, padding: 25 }]}>
        <View style={globalStyles.titleInput}>
          <TextInput 
            style={[globalStyles.textDefault, { color: this.state.colorText }]}
            placeholder='Title'
            onChangeText={(value) => this.setState({ title: value})}
            onFocus= {() => this.setState({ colorText: '#3C3C3C' })}
          />
          { this.state.alert.title && <Text style={globalStyles.alertText}>Title should be 5-25 charactors</Text> }
        </View>
        <View style={{ flex: 6, marginTop: 20 }}>
          <TextInput 
            multiline={true}
            style={[styles.descriptionInput, { color: this.state.colorText }]}
            placeholder='Description'
            onChangeText={(value) => this.setState({ description: value})}
            onFocus= {() => this.setState({ colorText: '#3C3C3C' })}
          />
          { this.state.alert.desc && <Text style={globalStyles.alertText}>Description should be 10-300 charactors</Text> }
        </View>
        <TouchableOpacity 
          style={globalStyles.buttonSuccess}
          onPress={this.handleCreate}
        >
          <Text style={[globalStyles.textBold, { color: '#FFF' }]}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleInput: {
    height: 40, 
    borderBottomWidth: 1,
    borderBottomColor: '#D5D5D5',
    fontSize: 20
  },
  descriptionInput: {
    fontSize: 20,
  }
})
export default TodoCreate