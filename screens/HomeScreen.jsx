import { ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import SafeAreaView from 'react-native-safe-area-view';
import { POSTS } from '../data/posts';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior='none'
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: 'black' },
        tabBarLabel: () => null,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => {
          return <Image key={1} source={focused ? require('../assets/home_icon.png') : require('../assets/home_inactive_icon.png')}
            style={styles.iconSize} />
        }
      }} />
      <Tab.Screen name="Search" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => {
          return <Image key={1} source={require('../assets/search_active_icon.png')}
            style={styles.iconSize} />
        }
      }} />
      <Tab.Screen name="Add" component={ProfileScreen} options={{
        tabBarIcon: ({ focused }) => {
          return <Image key={1} source={require('../assets/plus_icon.png')}
            style={styles.iconSize} />
        }
      }} />
      <Tab.Screen name="Reels" component={ProfileScreen} options={{
        tabBarIcon: ({ focused }) => {
          return <Image key={1} source={require('../assets/instagram_reels_inactive_icon.png')}
            style={styles.iconSize} />
        }
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ focused }) => {
          return <Image key={1} source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
            style={[styles.iconSize, styles.profilePic(), styles.profilePic(focused)]} />
        }
      }} />
    </Tab.Navigator>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView >
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  iconSize: {
    width: 25,
    height: 25
  },
  profilePic: (activeTab = '') => ({
    borderRadius: 50,
    borderWidth: activeTab === 'Profile' ? 2 : 0,
    borderColor: '#fff'
})
});

export default MyTabs