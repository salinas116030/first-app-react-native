import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Gallery = () => {
  return (
    <View style={styles.container}>
      <Text>Gallery Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
})

export default Gallery
