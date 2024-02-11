import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';

const SignUpForm = ({navigation}) => {
  const SignUpFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    username: Yup.string().required().min(2, 'A username is required'),
    password: Yup.string().required().min(6, 'Your password has to have at least 6 characters')
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: '', username: '', password: '' }}
        onSubmit={values => {
          console.log(values)
        }}
        validationSchema={SignUpFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View style={[styles.inputField,
            {
              borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red'
            }
            ]}>
              <TextInput
                placeholderTextColor='#444'
                placeholder='Email'
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                outoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View style={[styles.inputField,
            {
              borderColor: 1 > values.username.length || values.username.length >+ 6 ? '#ccc' : 'red'
            }
            ]}>
              <TextInput
                placeholderTextColor='#444'
                placeholder='Username'
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                outoFocus={true}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
            </View>
            <View style={[styles.inputField,
            {
              borderColor: 1 > values.password.length || values.password.length >= 6 ? '#ccc' : 'red'
            }
            ]}>
              <TextInput
                placeholderTextColor='#444'
                placeholder='Password'
                autoCapitalize='none'
                outoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>

            <Pressable
              style={styles.button(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
            <View style={styles.signupContainer}>
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: '#6BB0F5' }}>{' '}Log In</Text>
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
    backgroundColor: '#FAFAFA',
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
    borderRadius: 4,
    marginTop: 50
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
  }
})
export default SignUpForm