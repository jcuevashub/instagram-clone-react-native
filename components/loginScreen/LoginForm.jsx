import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Alert, TouchableHighlight } from 'react-native'
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginForm = ({ navigation }) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().required('An email is required'),
    password: Yup.string().required().min(6, 'Your password has to have at least 6 characters')
  });

  const onLogin = async (email, password) => {
    try {
      navigation.push('HomeScreen')
      Alert.alert("Firebase Login Successfull")
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          onLogin(values.email, values.password)
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View style={[styles.inputField,
            {
              borderColor: 1 > values.email.length || values.email.length >= 6 ? '#ccc' : 'red'
            }
            ]}>
              <TextInput
                placeholderTextColor='gray'
                placeholder='Phone number, username or email'
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                color='white'
                outoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View style={[styles.inputField,
            {
              borderColor: 1 > values.password.length || values.password.length >= 6 ? '#ccc' : 'red'
            }
            ]}>
              <TextInput
                placeholderTextColor='gray'
                placeholder='Password'
                autoCapitalize='none'
                outoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                color='white'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
              <TouchableOpacity>
                <Text style={styles.textColor}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            <Pressable
              style={styles.button(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
            <View style={styles.signupContainer}>
              <Text style={styles.textColor}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.push('SignUpScreen')}>
                <Text style={styles.textColor}>{' '}Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80
  },
  inputField: {
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 10,
    padding: 16,
  },
  button: isValid => ({
    backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4
  }),
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
  },
  textColor: {
    color: 'white'
  }
})
export default LoginForm