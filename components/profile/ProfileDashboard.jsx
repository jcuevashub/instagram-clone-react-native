import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ProfileDashboard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={[styles.textStyle, {fontWeight: 'bold', fontSize: 18}]}>123</Text>
                <Text style={styles.textStyle}>posts</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.textStyle, {fontWeight: 'bold',fontSize: 18}]}>23.4M</Text>
                <Text style={styles.textStyle}>followers</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.textStyle, {fontWeight: 'bold',fontSize: 18}]}>5</Text>
                <Text style={styles.textStyle}>following</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 60
    },
    textStyle: {
        color: 'white',
        fontSize: 15
    },
    textContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        padding: 10
    }
})

export default ProfileDashboard