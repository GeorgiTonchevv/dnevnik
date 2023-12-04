import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackgroundComponent } from 'react-native'
import React, { useState } from 'react'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <KeyboardAvoidingView
     style={styles.container} 
     behavior='padding'
     >
      <View style={styles.inputContainer}>
        <Text style={styles.loginstyle}>Log in</Text>
        <TextInput
        placeholder='Email'
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        />
        <TextInput
        placeholder='Password'
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
        />
      </View>

      <View style={styles.buttoncontainer}>
        <TouchableOpacity
        onPress={() => { }}
        style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => { }}
        style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}
export default LoginScreen  

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginstyle:{
    alignSelf: 'center',
    fontSize: 40,
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

  }
});
