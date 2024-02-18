import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/LoginForm'
import SafeAreaView from 'react-native-safe-area-view';

const LoginScreen = ({ navigation }) => (
    <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={require('../assets/instagram_logo_new.png')} style={{ width: 80, height: 80 }} />
        </View>
        <LoginForm navigation={navigation} />
    </SafeAreaView>

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

export default LoginScreen