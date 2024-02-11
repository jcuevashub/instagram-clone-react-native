import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';
import { POSTS } from '../data/posts';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';

const HomeScreen = () => {
  return (
    <SafeAreaProvider >
      <SafeAreaView style={styles.container}>
        <Header />
        <Stories />
        <ScrollView >
          {POSTS.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </ScrollView>
        <BottomTabs icons={bottomTabIcons}/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  }
});

export default HomeScreen