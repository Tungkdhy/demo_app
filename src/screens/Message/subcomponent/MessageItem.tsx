import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { Avatar } from '@rneui/themed';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
type PropsMessage = {
    userName: string,
    time: string,
    lastMessage?:string,
    avatar?:string
}
const MessageItem = (props: PropsMessage) => {
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
                    <Text style={styles.user_name}>{props.userName}</Text>
                    <Text style={styles.last_mess}>{props.lastMessage}</Text>
                </View>
            </View>
            <View>
                <Text>{props.time}</Text>
            </View>
        </Animated.View>
    );
};

export default MessageItem;
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
        flexDirection:"row",
        // width: '100%',
        padding: 12,
        paddingTop:16,
        paddingBottom:16,
        marginBottom: 0,
       
        justifyContent:"space-between",
        width:"100%",
      
        borderBottomWidth:1,
        borderBottomColor: "#17171729"
    },
    user: {
        flexDirection: "row",

        alignItems: "center"
    },
    user_name: {
        fontSize: 18,
        fontWeight: "700"
    },
    last_mess:{
        opacity:0.5
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