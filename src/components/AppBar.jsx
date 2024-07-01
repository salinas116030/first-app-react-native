import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export const AppBar = () => {
  // const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress=''>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress=''>
        <Text style={styles.buttonText}>Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress=''>
        <Text style={styles.buttonText}>Contact</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 30,
    backgroundColor: '#0000ff',
    marginTop: Constants.statusBarHeight
  },
  button: {
    paddingVertical: 0,
    padding: 10
  },
  buttonText: {
    color: 'white',
    flexWrap: 'wrap',
    fontSize: 12
  }
})
