import { View, Text, Pressable, StyleSheet, Alert, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderProfile from '../components/profile/HeaderProfile'
import ProfilePic from '../components/profile/ProfilePic'
import ProfileDashboard from '../components/profile/ProfileDashboard'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { black } from 'color-name'
import { Divider } from 'react-native-elements'

const Tab = createMaterialTopTabNavigator();
const numberOfCols = 3

const ProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderProfile navigation={navigation} />
            <View style={styles.dashboard}>
                <ProfilePic />
                <ProfileDashboard />
            </View>
            <Bio />
            <BottomActions />
            <BottomTabs icons={bottomTabIcons} navigation={navigation} />
            <Divider />
            <Tabs />
        </SafeAreaView>
    )
}

const Bio = () => (
    <Text style={{ color: 'white', marginLeft: 9, fontWeight: '400' }}>Software Engineer</Text>
);

const BottomActions = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
        <Pressable
            style={styles.buttomActionStyle}
            onPress={() => Alert.alert('Simple Button pressed')}>
            <Text style={styles.buttomActionTextStyle}>{'Edit profile'}</Text>
        </Pressable>
        <Pressable
            style={styles.buttomActionStyle}
            onPress={() => Alert.alert('Simple Button pressed')}>
            <Text style={styles.buttomActionTextStyle}>{'Share profile'}</Text>
        </Pressable>
        <Pressable
            style={[styles.buttomActionStyle, { width: 30, justifyContent: 'center', }]}
            onPress={() => Alert.alert('Simple Button pressed')}>
            <Image source={require('../assets/add_user_icon.png')} style={{ width: 15, height: 15, }} />
        </Pressable>
    </View>
);

const Posts = () => (
    <FlatList
        style={{ backgroundColor: 'black' }}
        data={["https://i.pravatar.cc", "https://i.pravatar.cc", "https://i.pravatar.cc", "https://i.pravatar.cc", "https://i.pravatar.cc", "https://i.pravatar.cc", "https://i.pravatar.cc", "https://i.pravatar.cc", "https://i.pravatar.cc", "https://i.pravatar.cc"]}
        keyExtractor={item => item.key}
        numColumns={numberOfCols}
        renderItem={({ item }) => (
            <Image key={item.key} source={{ uri: item }} style={{
                flex: 1,
                aspectRatio: 1,
                margin: 1,
            }} />
        )}

    />
)
const Reels = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <Text style={{ color: 'white' }}>Reels</Text>
    </View>
)

const Tags = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <Text style={{ color: 'white' }}>Tags</Text>
    </View>
)

const Tabs = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Posts') {
                    iconName = require('../assets/data_grid_icon.png');
                } else if (route.name === 'Reels') {
                    iconName = require('../assets/instagram_reels_active_icon.png');
                }
                else if (route.name === 'Tags') {
                    iconName = require('../assets/instagram_reels_active_icon.png');
                }

                // You can return any component that you like here!
                return <Image source={iconName} size={size} color={color} style={{ width: 25, height: 25 }} />;
            },
            tabBarShowIcon: true,
            tabBarStyle: { backgroundColor: 'black' },
            tabBarIndicatorStyle: {
                backgroundColor: 'white',
                height: 1,

            },
            tabBarLabel: () => null,
        })}


    >
        <Tab.Screen name="Posts" component={Posts} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Tags" component={Tags} />
    </Tab.Navigator>
)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    dashboard: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    buttomActionStyle: {
        backgroundColor: 'rgba(128, 128, 128, 0.5)', // 50% opacity
        margin: 3,
        padding: 6,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttomActionTextStyle: {
        color: 'white',
        fontWeight: '600',
        marginLeft: 46,
        marginRight: 46
    }
});

export default ProfileScreen