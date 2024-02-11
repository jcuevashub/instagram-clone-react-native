import { View, Text, TextInput, Button, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const LoginForm = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor='#444'
          placeholder='Phone number, username or email'
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='emailAddress'
          outoFocus={true}
        />
      </View>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor='#444'
          placeholder='Password'
          autoCapitalize='none'
          outoCorrect={false}
          secureTextEntry={true}
          textContentType='password'
        />
      </View>
      <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
        <TouchableOpacity>

          <Text style={{ color: '#6BB0F5' }}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <Pressable titleSize={20} style={styles.button} onPress={() => console.log("You clicked me!")}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={{ color: '#6BB0F5' }}>{' '}Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80
  },
  inputField: {
    backgroundColor: '#FAFAFA',
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 10,
    padding: 16,
  },
  button: {
    backgroundColor: '#0096F6',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  },
  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50
  }
})
export default LoginForm