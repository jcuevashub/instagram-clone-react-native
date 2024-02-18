import { View, Image,StyleSheet } from 'react-native'
import React from 'react'
import SignUpForm from '../components/signUpScreen/SignUpForm'

const SignUpScreen = ({navigation}) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image  source={require('../assets/instagram_logo_new.png')} style={{ width: 80, height: 80 }}/>
        </View>
        <SignUpForm navigation={navigation}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 50,
        paddingHorizontal: 12
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60
    }
})

export default SignUpScreen