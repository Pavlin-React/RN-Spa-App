import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import PostScreen from '../screens/PostScreen'
import FindScreen from '../screens/FindScreen'
import ChatScreen from '../screens/ChatScreen'
import SettingsScreen from '../screens/SettingsScreen'

const Tab = createBottomTabNavigator();

let CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
  style={{
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    ...styles.shadow
  }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e32f45'
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
)


const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 15,
          height: 90,
          ...styles.shadow
        },
        
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen}
        options={{
          tabBarIcon: ({focused})=>(
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
              source={require('../assets/icons/home.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
              Home
            </Text>
            </View>
            
          )
        }}
      />
      <Tab.Screen name='Find' component={FindScreen}
        options={{
          tabBarIcon: ({focused})=>(
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
              source={require('../assets/icons/search.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
              Find
            </Text>
            </View>
            
          )
        }}
      />
      <Tab.Screen name='Post' component={PostScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/plus2.png')}
              resizeMode= 'contain'
              style={{
                width: 30,
                height: 30,
                tintColor: '#fff'
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}/>
          )
        }}
      />
      <Tab.Screen name='Settings' component={SettingsScreen}
        options={{
          tabBarIcon: ({focused})=>(
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
              source={require('../assets/icons/settings.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
              Settings
            </Text>
            </View>
            
          )
        }}
      />
      <Tab.Screen name='Chat' component={ChatScreen}
        options={{
          tabBarIcon: ({focused})=>(
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
              source={require('../assets/icons/chat.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
              Chat
            </Text>
            </View>
            
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs

let styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5
  }
})

