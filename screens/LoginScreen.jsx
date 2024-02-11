import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'

const LoginScreen = () => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image  source={require('../assets/instagram_logo.png')}/>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60
    }
})

export default LoginScreen