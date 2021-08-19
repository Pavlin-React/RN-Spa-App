import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Hello from Settings Screen</Text>
      <Button
        title='Click Here'
        onPress={()=> alert('Button is Clicked')}
      />
    </View>
  )
}

export default SettingsScreen

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8fcbbc'
  }
})
