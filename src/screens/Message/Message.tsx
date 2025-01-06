import React, { useState } from 'react';
import { View,StyleSheet,Text, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MessageItem from './subcomponent/MessageItem';

type TypeMessage = {
    userName: string,
    time: string,
    lastMessage?:string,
    avatar?:string
}
const Message = () => {
    const [message,setMessage] = useState<TypeMessage[]>([
        {
            userName:"Trần Tùng",
            time:"12/11/2024",
            avatar:"T",
            lastMessage:"Hi"
        },
        {
            userName:"Quốc Bảo",
            time:"12/11/2024",
            avatar:"QB",
            lastMessage:"Hi"
        },
        {
            userName:"Trần Trung",
            time:"12/11/2024",
            avatar:"TT",
            lastMessage:"Hi"
        },

    ])
    return (
        <View style={styles.container}>
              <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: "600" }}>Tin nhắn</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ marginLeft: 4 }}><Feather name="settings" size={24} color="black" /></View>
                </View>
            </View>
            <ScrollView>
                {
                    message.map((item:TypeMessage,index:number)=><MessageItem avatar={item.avatar} lastMessage={item.lastMessage} time={item.time} userName={item.userName}/>)
                }
            </ScrollView>
        </View>
    );
};

export default Message;
const styles = StyleSheet.create({
    container:{

    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        paddingTop: 40,
        paddingLeft: 12,
        paddingRight: 12
    },
    content:{

    }
});