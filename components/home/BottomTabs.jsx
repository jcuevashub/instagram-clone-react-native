import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

import { Divider } from 'react-native-elements'
import { Touchable } from 'react-native'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: require('../../assets/home_icon.png'),
        inactive: require('../../assets/home_inactive_icon.png'),
    },
    {
        name: 'Search',
        active: require('../../assets/search_active_icon.png'),
        inactive: require('../../assets/search_inactive_icon.png'),
    },
    {
        name: 'Reels',
        active: require('../../assets/instagram_reels_active_icon.png'),
        inactive: require('../../assets/instagram_reels_inactive_icon.png'),
    },
    {
        name: 'Shop',
        active: require('../../assets/shopping_bag_active_icon.png'),
        inactive: require('../../assets/shopping_bag_inactive_icon.png'),
    },
    {
        name: 'Profile',
        active: "https://i.pravatar.cc/150?img=3",
    },
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home');

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image 
            source={icon.name === 'Profile' ? {uri: icon.active} : activeTab === icon.name ? icon.active : icon.inactive} 
            style={[styles.icon, icon.name === 'Profile' ? styles.profilePic() : null,
            activeTab === 'Profile' && icon.name === activeTab ? styles.profilePic(activeTab) : null
            ]} />
        </TouchableOpacity>
    )

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor: '#000'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10
    },
    icon: {
        width: 30,
        height: 30,
    },
    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        borderColor: '#fff'
    })
});

export default BottomTabs