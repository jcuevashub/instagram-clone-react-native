import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/Instagram_logo.svg.png')} />
            </TouchableOpacity>
            <View style={styles.iconContiner}>
                <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
                    <Image source={require('../../assets/plus_icon.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/heart_icon.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>11</Text>
                    </View>
                    <Image source={require('../../assets/facebook_messenger_icon.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20
    },
    iconContiner: {
        flexDirection: 'row'
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
        tintColor: 'white'
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain',
        tintColor: 'white',
    },
    unreadBadge: {
        backgroundColor: 'red',
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: '600'
    }
});

export default Header