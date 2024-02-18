import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const ProfilePic = () => {
    return (
        <View>
            <LinearGradient
                colors={['#F2703F', '#E35157', '#CA1D7E']}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                style={styles.storyGradient}>
                <Image source={{ uri: 'https://i.pravatar.cc' }} style={styles.story} />
            </LinearGradient>

            <Text style={{ color: 'white', fontWeight: '600' }}>{
                'jacksoncuevas'
            }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    storyGradient: {
        height: 82,
        width: 82,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 82 / 2,
        margin: 5,
    },
    story: {
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        alignSelf: 'center',
        borderColor: '#000',
        borderWidth: 2,

    }
})

export default ProfilePic