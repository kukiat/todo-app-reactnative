import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import CheckBox from 'react-native-check-box'
import globalStyles from '../styles'

export default ({ todo, onPress, checkTodo }) => {
  return (
      <TouchableOpacity 
        style={styles.todoItem}
        onPress={onPress}
      >
        <CheckBox 
          style={{ marginHorizontal: 10 }} 
          checkBoxColor='#EC5A65'
          isChecked={ todo.status } 
          onClick={() => checkTodo(todo)}
        />
        <Text style={globalStyles.textNormal}>{todo.title}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    height: 46,
    backgroundColor: '#FFF',
    marginBottom: 4,
    alignItems: 'center',
    fontSize: 20,
  }
});