import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { Avatar } from '@rneui/themed';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
type PropsOnline = {
    userName: string,
    time: string,
   
    like?:string,
    comment?:string,
    share?:string,
    content?:string,
    avatar?:string
}
const OnlineItem = (props: PropsOnline) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    // Start the animation on component mount
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,          // The final opacity value
            duration: 1000,      // Duration of the animation in milliseconds
            useNativeDriver: true, // Use the native driver for better performance
        }).start(); // Start the animation
    }, [fadeAnim]);
    return (
        <Animated.View style={[styles.container, styles.shadowProp, { opacity: fadeAnim }]}>
            <View style={styles.user}>
                <Avatar size={48}
                    rounded
                    title={props.avatar}
                    containerStyle={{ backgroundColor: '#3d4db7' }} />
                <View style={styles.info}>
                    <Text>{props.userName}</Text>
                    <Text>{props.time}</Text>
                </View>
            </View>
            <View style={styles.description}>
                <Text style={styles.title}>{props.content}</Text>
               

            </View>
            <View style={styles.interact}>
                <Text>{props.like} thích</Text>
                <Text>{props.comment} bình luận</Text>
                <Text>{props.share} chia sẻ</Text>
            </View>
        </Animated.View>
    );
};

export default OnlineItem;
const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 4,

        // width: '100%',
        padding: 12,
        marginBottom: 0,
        marginVertical: 10,
        paddingBottom:0
    },
    user: {
        flexDirection: "row",

        alignItems: "center"
    },
    user_name: {
        fontSize: 24,
        fontWeight: "500"
    },
    description: {
        paddingTop:8,
        paddingBottom:12
    },
    title: {
        paddingTop: 2,
        paddingBottom: 2
    },
    info: { paddingLeft: 12 },
    interact:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:12,
        alignItems:"center",
        borderTopWidth:1,
        borderTopColor:"#17171717"
    }

});