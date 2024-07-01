import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import theme from '../theme'

const RepositoryItemHeader = (props) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
    <View style={{ flex: 1, marginLeft: 20 }}>
      <StyledText fontSize='subheading' fontWeight='bold'>FullName: {props.fullName}</StyledText>
      <StyledText>{props.description}</StyledText>
      <StyledText style={styles.language}>{props.language}</StyledText>
    </View>
  </View>
)

const RepositoryItem = ({ item }) => {
  const { ownerAvatarUrl, fullName, description, language, stargazersCount, forksCount, reviewCount, ratingAverage } = item

  return (
    <View key={item.id} style={styles.container}>
      <RepositoryItemHeader
        ownerAvatarUrl={ownerAvatarUrl}
        fullName={fullName}
        description={description}
        language={language}
      />
      <RepositoryStats
        stargazersCount={stargazersCount}
        forksCount={forksCount}
        reviewCount={reviewCount}
        ratingAverage={ratingAverage}
      />
    </View>
  )
}

export default RepositoryItem

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden'
  }
})
