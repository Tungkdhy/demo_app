import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated, Pressable } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link,router } from 'expo-router';
type PropsMonitor = {
    userName: string,
    time: string,
    uuid: string
}
const MonitorItem = (props: PropsMonitor) => {
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
            <Pressable onPress={()=>{
                 router.navigate("/post-user");
            }}>
                <View style={styles.user}>
                    <Text style={styles.user_name}>{props.userName}</Text>
                    <FontAwesome5 name="trash" size={20} color="black" />
                </View>
                <View style={styles.description}>
                    <Text style={styles.title}>Trang cá nhân</Text>
                    <Text style={styles.title}>UID: <Text style={{ color: "red", fontWeight: "600" }}>{props.uuid}</Text></Text>
                    <Text style={styles.title}>Theo dõi</Text>
                    <Text style={styles.title}>Được thêm từ ngày {props.time}</Text>

                </View>
            </Pressable>
        </Animated.View>

    );
};

export default MonitorItem;
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
    },
    user: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    user_name: {
        fontSize: 24,
        fontWeight: "500"
    },
    description: {},
    title: {
        paddingTop: 2,
        paddingBottom: 2
    },

});