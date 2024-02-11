import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { postFooterIcons } from '../../data/posts'


const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentsSection post={post} />
            </View>

        </View>
    )
}

const PostHeader = ({ post }) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center'
    }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: post.profile_picture }} style={styles.story} />
            <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>{post.user}</Text>
        </View>
        <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
    </View>
)

const PostImage = ({ post }) => (
    <View style={{ width: '100%', height: 450 }}>
        <Image
            source={{ uri: post.imageUrl }}
            style={{ height: '100%', resizeMode: 'cover' }} />
    </View>
)

const PostFooter = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.leftFooterIconsContainer}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
        </View>
        <View>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
        </View>
    </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity >
        <Image style={imgStyle} source={imgUrl} />
    </TouchableOpacity>
);


const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
        <Text style={{ color: 'white', fontWeight: '600' }}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
);

const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: '600' }}>{post.user}</Text>
            <Text style={{ fontWeight: '600' }}> {post.caption}</Text>
        </Text>
    </View>
)

const CommentsSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {!!post.comments.length && (
            <Text style={{ color: 'gray' }}>
                View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}
                {post.comments.length > 1 ? ' comments' : ' comment'}
            </Text>
        )}
    </View>
)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 10,
        borderWidth: 1.6,
        borderColor: '#ff8501',
        marginBottom: 5
    },
    footerIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor: 'white',
    },
    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-between'
    }
});

export default Post