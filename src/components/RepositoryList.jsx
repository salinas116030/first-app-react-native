import React from 'react'
import { Text, FlatList, StyleSheet } from 'react-native'
import repositories from '../data/repositories.js'
import RepositoryItem from './RepositoryItem.jsx'

const RepositoryList = () => {
  return (
    <FlatList
      style={styles.container}
      data={repositories} ItemSeparatorComponent={() => <Text />} renderItem={RepositoryItem}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  }
})

export default RepositoryList
