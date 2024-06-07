import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import theme from '../theme'

const RepositoryItem = ({ item }) => (
  <View key={item.id} style={styles.container}>
    <StyledText fontSize='subheading' fontWeight='bold'>FullName: {item.fullName}</StyledText>
    <StyledText>{item.description}</StyledText>
    <StyledText style={styles.languaje}>{item.language}</StyledText>
    <RepositoryStats {...item} />
  </View>
)

export default RepositoryItem

const styles = StyleSheet.create({
  container: {
    padding: 20, paddingBottom: 5, paddingTop: 5
  },
  languaje: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden' // Para que se vea el borderRadius
  }
})
