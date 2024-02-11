import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = ({navigation}) => (
    <View style={styles.container}>
        <Header navigation={navigation} />
        <FormikPostUploader navigation={navigation}/>
    </View>
)

const Header = ({navigation}) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    source={require('../../assets/back_arrow_icon.png')}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>NEW POST</Text>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
        marginRight: 25
    }
})
export default AddNewPost