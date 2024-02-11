import { View, Text, SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/newPost/AddNewPost'

const NewPostScreen = () => {
    return (
        <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
            <Header />
        </SafeAreaView>
    )
}


export default NewPostScreen