import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data/user'
import { LinearGradient } from 'expo-linear-gradient';

const Stories = () => {
    return (

        <View style={{
            marginBottom: 13,
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {USERS.map((story, index) => (
                    <View key={index} style={{ alignItems: 'center' }}>
                        <LinearGradient
                            colors={['#F2703F', '#E35157','#CA1D7E']}
                            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                            style={styles.storyGradient}>
                            <Image source={{ uri: story.image }} style={styles.story} />
                        </LinearGradient>
                        <Text style={{ color: 'white' }}>{
                            story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + '...' : story.user.toLowerCase()
                        }</Text>
                    </View>
                ))}
            </ScrollView>
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

export default Stories