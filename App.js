import { View } from 'react-native'
import { NativeRouter } from 'react-router-native'
import Main from './src/components/Main'

export default function App () {
  return (
    <NativeRouter>
      <View>
        <Main />
      </View>
    </NativeRouter>
  )
}
