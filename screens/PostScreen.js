import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const PostScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Hello from Post Screen</Text>
      <Button
        title='Click Here'
        onPress={()=> alert('Button is clicked')}
      />
    </View>
  )
}

export default PostScreen

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8fcbbc'
  }
})
