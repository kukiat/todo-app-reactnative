import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import globalStyles from '../styles'

class Create extends Component {
  state = {
    title: '',
    description: '',
    colorText: '#D9D9D9'
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
      <View style={[globalStyles.layout, { flex: 1, padding: 25 }]}>
        <View style={globalStyles.titleInput}>
          <TextInput 
            style={[globalStyles.textDefault, { color: this.state.colorText }]}
            placeholder='Title'
            onChangeText={(value) => this.setState({ title: value})}
            onFocus= {() => this.setState({ colorText: '#3C3C3C' })}
          />
        </View>
        <View style={{ flex: 6, marginTop: 20 }}>
          <TextInput 
            multiline={true}
            style={[styles.descriptionInput, { color: this.state.colorText }]}
            placeholder='Description'
            onChangeText={(value) => this.setState({ description: value})}
            onFocus= {() => this.setState({ colorText: '#3C3C3C' })}
          />
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
export default Create