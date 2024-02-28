import { View, Text, Pressable, StyleSheet, Alert, Image, FlatList, ScrollView, Dimensions, TouchableOpacity, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderProfile from '../components/profile/HeaderProfile'
import ProfilePic from '../components/profile/ProfilePic'
import ProfileDashboard from '../components/profile/ProfileDashboard'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { userPosts } from '../data/posts'

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
            <StoryHighlightsContainer />
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

const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth * 0.15;

const StoryHighlightsContainer = () => {
    const animatedHeight = useRef(new Animated.Value(100)).current;
    const [expanded, setExpanded] = useState(true);

    const toggleAnimation = () => {
        Animated.timing(animatedHeight, {
            toValue: expanded ? 0 : 100,
            duration: 300,
            useNativeDriver: false,
        }).start();

        setExpanded(!expanded);
    };

    return (
        <View style={{ margin: 10 }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text style={{ color: 'white', fontWeight: '700' }}>{'Story highlights'}</Text>
                <TouchableOpacity onPress={toggleAnimation}>
                    <Text style={{ color: 'white' }}>{expanded ? 'Fold' : 'Unfold'}</Text>
                </TouchableOpacity>
            </View>
            <Animated.View style={[styles.collapsibleView, { height: animatedHeight }]}>
                <Text style={{ color: 'white', fontWeight: '500' }}>Keep your favorite stories on your profile</Text>
                <View style={{ alignItems: 'center', margin: 10 }}>
                    <StoryHighlights />
                </View>
            </Animated.View>
        </View>
    )
}

const storyHighlights = [
    { id: '1', title: 'Sunny Days', imageUri: "https://i.pravatar.cc" },
    { id: '2', title: 'Beach', imageUri: "https://i.pravatar.cc" },
    { id: '3', title: 'Foodie', imageUri: "https://i.pravatar.cc" },
    { id: '4', title: 'Foodie', imageUri: "https://i.pravatar.cc" },
    { id: '5', title: 'Foodie', imageUri: "https://i.pravatar.cc" },
];

const StoryHighlights = () => (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
        flexDirection: 'row'
    }}>
        {storyHighlights.map((highlight) => (
            <View key={highlight.id} style={styles.highlightContainer}>
                <Image source={{ uri: highlight.imageUri }} style={[styles.highlightImage, { width: imageSize, height: imageSize }]} />
                <Text numberOfLines={1} style={styles.highlightTitle}>{highlight.title}</Text>
            </View>
        ))}
    </ScrollView>
)

const Posts = () => (
    <FlatList
        style={{ backgroundColor: 'black' }}
        data={userPosts}
        keyExtractor={item => item.id}
        numColumns={numberOfCols}
        renderItem={({ item }) => (
            <Image key={item.id} source={{ uri: item.url }} style={{
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
            tabBarShowIcon: true,
            tabBarStyle: { backgroundColor: 'black' },
            tabBarIndicatorStyle: {
                backgroundColor: 'white',
                height: 1,
            },
            tabBarLabel: () => null,
        })} >
        <Tab.Screen name="Posts" component={Posts}
            options={{
                tabBarIcon: ({ focused }) => {
                    return <Image key={1} source={require('../assets/data_grid_icon.png')}
                        style={styles.iconSize} />
                }
            }}
        />
        <Tab.Screen name="Reels" component={Reels}
            options={{
                tabBarIcon: ({ focused }) => {
                    return <Image key={1} source={require('../assets/instagram_reels_active_icon.png')}
                        style={styles.iconSize} />
                }
            }}
        />
        <Tab.Screen name="Tags" component={Tags}
            options={{
                tabBarIcon: ({ focused }) => {
                    return <Image key={1} source={require('../assets/tag_icon.webp')}
                        style={styles.iconSize} />
                }
            }} />
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
        backgroundColor: 'rgba(128, 128, 128, 0.5)',
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
    },
    highlightImage: {
        borderRadius: imageSize / 2,
        borderWidth: 2,
        borderColor: '#fff',
    },
    highlightContainer: {
        alignItems: 'center',
        marginRight: 15,
    },
    highlightTitle: {
        marginTop: 5,
        maxWidth: imageSize,
        textAlign: 'center',
    },
    collapsibleView: {
        overflow: 'hidden',
    },
    button: {
        width: 30,
        backgroundColor: '#DDDDDD',
    },
    iconSize: {
        width: 25,
        height: 25,
        tintColor: 'white'
    },
});

export default ProfileScreen