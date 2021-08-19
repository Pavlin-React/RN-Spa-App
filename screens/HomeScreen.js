import React from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Hello from Home Screen</Text>
      <Button
        title='Click Here'
        onPress={()=>alert('Button is clicked')}
      />
    </View>
  )
}

export default HomeScreen

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8fcbbc'
  }
})

