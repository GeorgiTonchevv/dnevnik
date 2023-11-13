import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
    <View style={styles.screenWrapper}>
      <Text style={styles.titleText}>Login screen</Text>
      <TextInput style={styles.inputusername} placeholder="Enter Username" />
      <TextInput style={styles.inputpassword} placeholder="Enter Password" />
      <Text style={styles.forgotPassword}> forgot password?</Text>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({container: {
    flex: 1,
    justifyContent: 'center'
  },
  screenWrapper: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  inputusername: {
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    padding: 10,
    paddingHorizontal: 20
  },
  inputpassword: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    padding: 10,
    paddingHorizontal: 20
  },
  forgotPassword: {
    marginTop: 5,
    marginLeft: 250
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#0E86D4',
    width: '40%',
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    fontSize: 5,
    borderColor: 'black',
    borderWidth: 2
  },
  buttonText: {
    fontSize: 15,
    color: 'black'
  },
});
