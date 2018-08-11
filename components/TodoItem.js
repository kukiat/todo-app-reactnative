import React from 'react'
import { Text } from 'react-native'
import globalStyles from '../styles'

export default ({ todo }) => {
  return (
      <Text style={globalStyles.textNormal}>
        {todo.title}
      </Text>
  )
}