import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseConfig';

const CreateScreen = () => {
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

  const [selectedType, setSelectedType] = useState(null);   
  const handleCheckBoxPress = (type) => {
    setSelectedType(type);
  };
  function ValidInput() {
    return true;
  }
  const handleSignUp = () => {

    if (ValidInput()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user.email
          console.log('Successfully registered user:', user)
        })
        .catch(error => console.log(error.message))
    }
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.inputContainer}>
        <Text style={styles.InfoStyle}>Create an Account</Text>
        <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={(text) => setEmail(text)} />
        <TextInput placeholder='Full Name' style={styles.input} value={fullName} onChangeText={(text) => setFullName(text)} />
        <TextInput placeholder='Password' style={styles.input} value={password} onChangeText={(text) => setPassword (text)} secureTextEntry />
        <TextInput placeholder='Confirm Password' style={styles.input} value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)} secureTextEntry />
      </View>
      <View style={styles.checkmark}>
      <CheckBox title='Student' checked={selectedType === 'Student'} onPress={() => handleCheckBoxPress('Student')} />
        <CheckBox title='Teacher' checked={selectedType === 'Teacher'} onPress={() => handleCheckBoxPress('Teacher')} />
        <CheckBox title='Admin' checked={selectedType === 'Admin'} onPress={() => handleCheckBoxPress('Admin')} />
      </View>

      <View style={styles.buttoncontainer}>
        <TouchableOpacity onPress={() => handleSignUp() } style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity> 
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({  
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InfoStyle :{
    marginBottom: 80,
    alignSelf: 'center',
    fontSize: 39,
    fontWeight: 'bold'
  },

  inputContainer: {
    width: '80%',
    
  },

  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1
  },

  buttoncontainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40

  },

  button:{
    backgroundColor: '#0096FF',
    width: '100%',
    padding: 11,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 2,
    alignItems: 'center'

  },

  buttonOutline:{
    backgroundColor: 'white',
    borderColor: '#0096FF',
    marginTop: 5

  },

  buttonText:{
    color: 'white', 
    fontWeight: '800',
    fontSize: 16

  },

  buttonOutlineText:{
    color: '#0096FF',
    fontWeight: '800',
    fontSize: 16
  },

  checkmark:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%', 
    marginTop: 20,
  }

  });
 export default CreateScreen;