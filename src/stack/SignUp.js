// SignUp.js
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../Firebaseconfig';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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

  const signup = async (email, password) => {
    try {
      // Create a new user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
  
      // Add user data to Firestore
      /*await FIREBASE_DB.collection('users')
        .doc(FIREBASE_AUTH.currentUser.uid)
        .set({
          name,
          email,
        });*/
  
      // You can perform additional actions or navigate to another screen here if needed
  
      // Display a success message or perform any other actions
      alert('Signup successful');
      navigation.navigate('Login');
    } catch (error) {
      alert(error.message);
    }
  };

  /*const handleSignUp = async () => {
    try {
      // Create a new user with email and password
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);

      // Update user display name (optional)
      await userCredential.user.updateProfile({
        displayName: name,
      });

      // Log the user in
      await firebase.auth().signInWithEmailAndPassword(email, password);

      console.log('Successfully signed up and logged in:', userCredential.user.email);
      navigation.navigate('Home_page');
    } catch (error) {
      Alert.alert('Sign up failed', error.message);
    }
  };*/

  return (
    <View style={styles.container}>
      <Image source={require('../icons_fyp/logo_Icon.png')} style={styles.image} />
      <Text style={styles.title}>Sign Up</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={() => {signup(email,password,name); isValidEmail(); isValidPassword();}}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
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
    color: '#000000',
    marginBottom: 20,
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
  loginText: {
    marginTop: 20,
    color: '#4173A1',
  },
});

export default SignUp;
