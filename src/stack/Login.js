// Login.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../Firebaseconfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import PushNotification from "react-native-push-notification";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;
  const db = FIREBASE_DB;

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    // Password validation with at least 8 characters, one uppercase, one lowercase, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  /*const handleLogin = async () => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('Successfully logged in:', userCredential.user.email);
      navigation.navigate('Home_page');
    } catch (error) {
      Alert.alert('Login failed', error.message);
    }
  };*/

  const login = async (email,password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth,email, password);
      console.log('Successfully logged in:', userCredential.user.email);
      Alert.alert('Sign in successful', `Welcome, ${userCredential.user.email}`);
      navigation.navigate('Parent');
    } catch (error) {
      Alert.alert('User does not exist');
    }
  }

  const validateAndLogin = () => {
    // Basic validation
    if (!email || !password) {
      Alert.alert('Both email and password are required');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Please enter a valid email address');
      return;
    }

    if (!isValidPassword(password)) {
      Alert.alert(
        'Password must have at least 8 characters, including one uppercase letter, one lowercase letter, and one special character'
      );
      return;
    }

    // Implement your login logic here
    // You can validate fields and make an API call for authentication
    console.log('Email:', email);
    console.log('Password:',password);

    const createChannels=()=>{
      PushNotification.createChannels(
        {
      channelId:'test-channel',
      channelName:'Test Channel'
        })
    }

    // Call the login function
    //handleLogin();

    //Log Out
    /*<TouchableOpacity style={styles.button} onPress={() => FIREBASE_AUTH.signOut()}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>*/
  };


  return (
    <View style={styles.container}>
      <Image source={require('../icons_fyp/logo_Icon.png')} style={styles.image} />
      <Text style={styles.title}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={() => {login(email,password); validateAndLogin();}}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#C6E6F3',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#4173A1',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 20,
    color: '#4173A1',
  },
});

export default Login;
