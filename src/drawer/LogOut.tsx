import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../Firebaseconfig';


const Logout = (props:any) => {
  const auth = FIREBASE_AUTH;
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center', backgroundColor:'#C6E6F3'}}>
      <TouchableOpacity  style={styles.button} onPress={() => {
        props.navigation.navigate('Login')
        FIREBASE_AUTH.signOut()}}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
    </View>

  )
}

export default Logout

const styles=StyleSheet.create({
  button:{
    backgroundColor:'black'
  },
  buttonText:{
color:'red',
padding:10,
  }
})