import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile';
import Notifications from './Notifications';
import PrivacyPolicy from './PrivacyPolicy';
import History from './History';
import AccountSettings from './AccountSettings';
import Logout from './LogOut';
import Main from './Main';

const Drawer=createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen
            name='Home'
            component={Main}
            options={{headerShown:false}}
        />

        <Drawer.Screen
            name='Profile'
            component={Profile}
            options={{headerShown:true}}
        />

        <Drawer.Screen
            name='Notifications'
            component={Notifications}
            options={{headerShown:true}}
        />

        <Drawer.Screen
            name='Privacy Policy'
            component={PrivacyPolicy}
            options={{headerShown:true}}
        />

        <Drawer.Screen
            name='History'
            component={History}
            options={{headerShown:true}}
        />

        <Drawer.Screen
            name='Account Settings'
            component={AccountSettings}
            options={{headerShown:true}}
        />

        <Drawer.Screen
            name='LogOut'
            component={Logout}
            options={{headerShown:true}}
        />

    </Drawer.Navigator>
  );
}

export default DrawerNavigator;