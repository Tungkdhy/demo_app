import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
type propsCard = {
    title: string,
    number: number|string,
    width: number,
    border?: boolean
}
const Card = (props: propsCard) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    // Start the animation on component mount
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,          // The final opacity value
            duration: 2000,      // Duration of the animation in milliseconds
            useNativeDriver: true, // Use the native driver for better performance
        }).start(); // Start the animation
    }, [fadeAnim]);
    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim, width: `${(100 / props.width) - 1}%` }, props.border ? {
            borderRadius: 8,
            borderColor: "#e4c7c7",
            borderWidth: 2,
        } : {}]}>
            <View style={styles.content}>
                <Text style={styles.number}>{props.number}</Text>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </Animated.View>
    );
};

export default Card;
const styles = StyleSheet.create({
    container: {

        width: "48%",
        marginBottom: 12
    },
    number: {
        fontSize: 40,
        fontWeight: 500
    },
    content: {
        padding: 8
    },
    text: {
        fontSize: 14
    }
});