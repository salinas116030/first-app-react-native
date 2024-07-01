import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text>Contact Screen</Text>
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

export default Contact
