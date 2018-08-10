import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default ({ switchFilter }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterBtn} onPress={() => switchFilter('ALL')}>
        <Text>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterBtn} onPress={() => switchFilter('COMPLETE')}>
        <Text>Complete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterBtn} onPress={() => switchFilter('ACTIVE')}>
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
    borderColor: '#E4E6E8',
    // backgroundColor: 
  }
})