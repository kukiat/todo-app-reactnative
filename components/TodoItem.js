import React from 'react'
import { View, Text } from 'react-native'

export default ({ todo }) => {
  return (
      <Text style={{ fontSize: 18 }}>
        {todo.title}
      </Text>
  )
}