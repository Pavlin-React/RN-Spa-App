import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ChatScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
      <Button
        title='Click Here'
        onPress={()=> alert('Button is clicked')}
      />
    </View>
  )
}

export default ChatScreen

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8fcbbc'
  }
})
