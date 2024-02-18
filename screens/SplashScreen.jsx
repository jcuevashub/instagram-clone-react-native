import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.push('LoginScreen')
        }, 2000); 

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <View></View>
            <View>
                <Image source={require('../assets/instagram_logo_new.png')} style={{ width: 90, height: 90 }} />
            </View>
            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Text style={{ color: 'gray', fontSize: 16, margin: -30 }}>From</Text>
                <Image source={require('../assets/meta_logo.png')} style={styles.metaLogo} />
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'black',
        justifyContent: 'space-between'
    },
    metaLogo: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        margin: 0
    }
});



export default SplashScreen