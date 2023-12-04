import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <KeyboardAvoidingView
     style={styles.container} 
     behavior='padding'
     >
    <View>
      <Text style={styles.WelcomeSign}>Welcome!</Text>
    </View>

    <View style={styles.buttoncontainer}>
        <TouchableOpacity
        onPress={() => { }}
        style={styles.button}
        >
          <Text style={styles.TextCreate}>Create Account</Text>
        </TouchableOpacity>
    </View>
     </KeyboardAvoidingView>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  }, 

  WelcomeSign:{
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold'
  },

  TextCreate:{
    color: 'black'
  },

  button:{
    backgroundColor: '#0096FF',
    width: '110%',
    padding: 11,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 2,
    alignItems: 'center'
  },

  buttoncontainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
})