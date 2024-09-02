import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './stack/Splash';
import Parent from './stack/Parent';
import Articles from './stack/Articles';
import Covid from './Articles/Covid';
import WeightLoss from './Articles/WeightLoss';
import BreastCancer from './Articles/BreastCancer';
import AlternateMeds from './stack/AlternateMeds';
import SetReminders from './stack/SetReminders';
import Coffee from './Articles/Coffee';
import Login from './stack/Login';
import MyHome from './bottom/Myhome';
import SignUp from './stack/SignUp';

const Stack= createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        
          name='Splash'
          component={Splash}
          options={{headerShown:false}}
        
        />

        <Stack.Screen
        
        name='Login'
        component={Login}
        options={{headerShown:false}}
      
      />

      <Stack.Screen
        
        name='SignUp'
        component={SignUp}
        options={{headerShown:false}}
      
      />

  

      <Stack.Screen
        
        name='Myhome'
        component={MyHome}
        options={{headerShown:false}}
      
      />

        <Stack.Screen
        
        name='Parent'
        component={Parent}
        options={{headerShown:false}}
      
      />

      <Stack.Screen
        
        name='Articles'
        component={Articles}
        options={{headerShown:false}}
      
      />

      <Stack.Screen
        
        name='Covid-19'
        component={Covid}
        options={{headerShown:true}}
      
      />

      <Stack.Screen
        
        name='Weight Loss'
        component={WeightLoss}
        options={{headerShown:true}}
      
      />

      <Stack.Screen
        
        name='Breast Cancer'
        component={BreastCancer}
        options={{headerShown:true}}
      
      />

      <Stack.Screen
        
        name='Excessive Coffee Side Effects'
        component={Coffee}
        options={{headerShown:true}}
      
      />

      <Stack.Screen
        
        name='AlternateMeds'
        component={AlternateMeds}
        options={{headerShown:false}}
      
      />

      <Stack.Screen
        
        name='SetReminders'
        component={SetReminders}
        options={{headerShown:false}}
      
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator