import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const HeaderProfile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={{ fontSize: 23, color: 'white', fontWeight: 'bold' }}>jacksoncuevas</Text>
            </TouchableOpacity>
            <View style={styles.iconContiner}>
                <TouchableOpacity>
                    <Image source={require('../../assets/plus_icon.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                    </View>
                    <Image source={require('../../assets/list_icon.png')} style={[styles.icon, { width: 30 }]} />
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
        width: 120,
        height: 50,
        resizeMode: 'contain',
        tintColor: 'white'
    },
    icon: {
        width: 30,
        height: 30,
        margin: 5,
        resizeMode: 'contain',
        tintColor: 'white',
    },
    unreadBadge: {
        backgroundColor: 'red',
        position: 'absolute',
        left: 25,
        bottom: 23,
        width: 10,
        height: 10,
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

export default HeaderProfile