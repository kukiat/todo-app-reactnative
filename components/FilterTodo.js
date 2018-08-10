import React from 'react'

export default () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
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