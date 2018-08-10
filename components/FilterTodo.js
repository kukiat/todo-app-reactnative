import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterBtn}>
        <Text>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterBtn}>
        <Text>Complete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterBtn}>
        <Text>Active</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    justifyContent: 'space-around',
  },
  filterBtn: {
    width: 80,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'red'
  }
})