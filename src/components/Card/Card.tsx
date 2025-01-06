import React,{useRef,useEffect} from 'react';
import { View, StyleSheet, Text,Animated } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
type PropsCard = {
    name: string,
    status: "Báo xấu" | "Khác" | "Giám sát"|"other",
    title: string,
    content: string,
    time: string
}
const Card = (props: PropsCard) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    
        // Start the animation on component mount
        useEffect(() => {
            Animated.timing(fadeAnim, {
                toValue: 1,          // The final opacity value
                duration: 1000,      // Duration of the animation in milliseconds
                useNativeDriver: true, // Use the native driver for better performance
            }).start(); // Start the animation
        }, [fadeAnim]);
    const checkStyles = (status:string)=>{
        if(status ==="Báo xấu"){
            return styles.status
        }
        else if(status ==="Khác"){
            return  styles.primary
        }
        else{
            return styles.success
        }
    }
    return (
        <Animated.View style={[styles.container, styles.shadowProp,{ opacity: fadeAnim}]}>
            <View style={styles.sender} >
                <Text style={styles.name_sender}>{props.name}</Text>
                {props.status ==="other" ? <MaterialIcons name="navigate-next" size={24} color="black" />:<View style={checkStyles(props.status)}>
                    <Text style={styles.text_status}>{props.status}</Text>
                </View>}
                
            </View>
            <View style = {styles.border}>
                <View style={styles.title}>
                    <Text style={styles.text_title}>{props.title}</Text>
                </View>
                <View style={styles.content}>
                    <Text>{props.content}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.time}>Thời gian:{props.time}</Text>
                <Text style={styles.detail}>Chi tiết</Text>
            </View>
        </Animated.View>
    );
};

export default Card;
const styles = StyleSheet.create({
    card: {

    },
    name_sender:{
        fontSize:12
    },
    text_title: {
        color: "#2dd627"
    },
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
    sender: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft:15
    },
    border:{
        paddingLeft:12,
        borderLeftColor:"#2dd627",
        borderLeftWidth:3,
        paddingBottom:10,
        paddingTop:8
    },
    title: {
        paddingBottom: 4
    },
    text_status: {
        color: "white",
        fontSize: 12
    },
    content: {

    },
    status: {
        padding: 2,
        paddingLeft: 6,
        paddingRight: 6,
        backgroundColor: "red",
        borderRadius: 4
    },
    primary:{
        padding: 2,
        paddingLeft: 6,
        paddingRight: 6,
        backgroundColor: "#0d6efd",
        borderRadius: 4 
    },
    success:{
        padding: 2,
        paddingLeft: 6,
        paddingRight: 6,
        backgroundColor: "#2dd627",
        borderRadius: 4
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft:15
    },
    time:{
        fontSize:13
    },
    detail:{
        color:"#2dd627",
        fontWeight:"600",
        fontSize:13
    }
});