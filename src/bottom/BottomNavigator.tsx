import { View, Text, Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Myhome from './Myhome';
import MedsInfo from './MedsInfo';
import Reminder from './Reminder';
import Locator from './Locator';

const Tab=createBottomTabNavigator();

const BottomNavigator = () => {
  return ( 

    <Tab.Navigator
    screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
                position: "absolute",
                backgroundColor: 'transparent',
                bottom: 10,
                height: 70,
                elevation: 0,

        }
}}
    >
        <Tab.Screen
            name='MyHome'
            component={Myhome}
            options={{
                tabBarIcon: ({ focused }) => (
                        <View style={{
                                alignItems: 'center', justifyContent: 'center', top: 10

                        }}>
                                <Image
                                        source={require('../icons_fyp/icons8-home-24.png')}
                                        resizeMode="contain"
                                        style={{
                                                width: 35,
                                                height: 35,
                                        }}
                                />

                                <Text style={{
                                        color: focused ? 'white' : 'black',
                                        backgroundColor: focused ? 'black' : 'transparent',
                                        padding: 5,
                                        fontSize: 16, fontWeight: "bold"
                                }}>Home</Text>
                        </View>
                )
        }}
        />

        <Tab.Screen
            name='MedsInfo'
            component={MedsInfo}
            options={{
                tabBarIcon: ({ focused }) => (
                        <View style={{
                                alignItems: 'center', justifyContent: 'center', top: 10,
                        }}>
                                <Image
                                        source={require('../icons_fyp/icons8-treatment-24.png')}
                                        resizeMode="contain"
                                        style={{
                                                width: 35,
                                                height: 35,
                                        }}
                                />

                                <Text style={{
                                        color: focused ? 'white' : 'black',
                                        backgroundColor: focused ? 'black' : 'transparent',
                                        padding: 5, fontSize: 16, fontWeight: "bold"
                                }}>Meds Info</Text>
                        </View>
                )
        }}
        />

        <Tab.Screen
            name='Reminder'
            component={Reminder}
            options={{
                tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, }}>
                                <Image
                                        source={require('../icons_fyp/icons8-pills-24.png')}
                                        resizeMode="contain"
                                        style={{
                                                width: 35,
                                                height: 35,
                                        }}
                                />

                                <Text style={{
                                        color: focused ? 'white' : 'black',
                                        backgroundColor: focused ? 'black' : 'transparent',
                                        padding: 5, fontSize: 16, fontWeight: "bold"
                                }}>Reminder</Text>
                        </View>
                )
        }}
        />

        <Tab.Screen
            name='Locator'
            component={Locator}
            options={{
                tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, }}>
                                <Image
                                        source={require('../icons_fyp/icons8-place-marker-24.png')}
                                        resizeMode="contain"
                                        style={{
                                                width: 35,
                                                height: 35,
                                        }}
                                />

                                <Text style={{
                                        color: focused ? 'white' : 'black',
                                        backgroundColor: focused ? 'black' : 'transparent',
                                        padding: 5, fontSize: 16, fontWeight: "bold"
                                }}>Locator</Text>
                        </View>
                )
        }}

        />
    </Tab.Navigator>
  )
}

export default BottomNavigator