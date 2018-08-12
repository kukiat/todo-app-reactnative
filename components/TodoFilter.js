import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default ({ switchFilter, filter }) => {
  const btnType = ['ALL', 'COMPLETE', 'ACTIVE']
  return (
    <View style={styles.container}>
      { btnType.map((type, index) => (
        <TouchableOpacity 
          key={index}
          style={filter === type ? styles.enableFilterBtn : styles.disableFilterBtn} 
          onPress={() => switchFilter(type)}
        >
          <Text 
            style={filter === type ? styles.enableText : styles.disableText}
          >
            {type}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    backgroundColor: '#FFF',
    padding: 9,
    justifyContent: 'space-around'
  },
  enableFilterBtn: {
    width: 100,
    height: 35,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#EC5A65',
    borderColor: '#EC5A65',
  },
  disableFilterBtn: {
    width: 100,
    borderRadius: 20,
    height: 35,
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: '#9da0a0',
  },
  disableText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'capitalize',
    color: '#9da0a0'
  },
  enableText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'capitalize',
    color: '#FFF'
  }
})