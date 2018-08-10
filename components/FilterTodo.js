import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default ({ switchFilter, filter }) => {
  const btnType = ['ALL', 'COMPLETE', 'ACTIVE']
  return (
    <View style={styles.container}>
      { btnType.map(type => (
        <TouchableOpacity 
          style={filter === type ? styles.enableFilterBtn : styles.disableFilterBtn} 
          onPress={() => switchFilter(type)}
        >
          <Text style={styles.text}>{type}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    height: 40,
    paddingTop: 5
  },
  enableFilterBtn: {
    width: 100,
    height: 30,
    borderWidth: 1.5,
    borderRadius: 5,
    justifyContent: 'center',
    borderColor: '#FF672B',
    color: '#FF672B'
  },
  disableFilterBtn: {
    width: 100,
    height: 30,
    borderWidth: 1.5,
    borderRadius: 5,
    justifyContent: 'center',
    borderColor: '#9da0a0',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'capitalize'
    // color: '#6A6A6A'
  }
})