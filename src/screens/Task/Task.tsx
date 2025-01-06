import Card from '@components/Card/Card';
import React, { useState } from 'react';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

import { View, StyleSheet, Text, Pressable, Animated, Dimensions, TextInput, ScrollView } from 'react-native';
import CustomTabs from '@components/Filter/Filter';
type TaskType = {
    name: string,
    status: "Báo xấu" | "Khác" | "Giám sát",
    title: string,
    content: string,
    time: string

}
const Task = () => {
    const [underlinePosition] = useState(new Animated.Value(0));
    const [task, setTask] = useState<TaskType[]>([
        {
            time: "2023",
            status: "Báo xấu",
            title: "Báo xấu mục tiêu Nguyễn Thành Lương",
            content: "Đề nghị các đc tham gia kiểm thử tích cực tương tác",
            name: "BCD 35"
        },
        {
            time: "2023",
            status: "Khác",
            title: "Báo xấu mục tiêu Nguyễn Thành Lương",
            content: "Đề nghị các đc tham gia kiểm thử tích cực tương tác",
            name: "BCD 35"
        },
        {
            time: "2023",
            status: "Giám sát",
            title: "Báo xấu mục tiêu Nguyễn Thành Lương",
            content: "Đề nghị các đc tham gia kiểm thử tích cực tương tác",
            name: "BCD 35"
        }
    ])
    const [active, setActive] = useState(1)
    const [isSearch, setIsSearch] = useState(false)
    const [value,setValue] = useState('')
    return (
        <View style={{flex:1}}>
            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: "600" }}>Nhiệm vụ</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {active === 2 && <AntDesign name="plus" size={28} color="black" />}
                    <Pressable onPress={()=>setIsSearch(!isSearch)}>
                    <EvilIcons name="search" size={36} color="black" />
                    </Pressable>
                    <View style={{ marginLeft: 4 }}><Feather name="settings" size={24} color="black" /></View>
                </View>
            </View>
            <View style={styles.status_task}>
                {isSearch ? <View style={styles.input}>
                    <TextInput  value='tung'/>
                </View> : <>
                    <Pressable onPress={() => {
                        setActive(1)
                        Animated.spring(underlinePosition, {
                            speed: 8,
                            toValue: 0 * Dimensions.get("screen").width / 2, // Tab width is 100, adjust as per your tab style

                            useNativeDriver: false,

                        }).start();
                    }} style={[styles.item_status, active === 1 ? styles.active : {}]}>
                        <Text style={{ textAlign: "center" }}>Nhận nhiệm vụ</Text>
                    </Pressable>
                    <Pressable onPress={() => {
                        setActive(2)
                        Animated.spring(underlinePosition, {
                            speed: 8,

                            toValue: 1 * Dimensions.get("screen").width / 2, // Tab width is 100, adjust as per your tab style
                            useNativeDriver: false,
                        }).start();
                    }} style={[styles.item_status, active === 2 ? styles.active : {}]}>
                        <Text style={{ textAlign: "center" }}>Giao nhiệm vụ</Text>
                    </Pressable>

                    <Animated.View style={[styles.underline, {
                        transform: [{ translateX: underlinePosition }],
                    },]}></Animated.View>
                </>}
            </View>
            <CustomTabs tabs={['Tất cả', 'Chưa đọc',"Đã đọc"]}/>
            <ScrollView style={styles.task_list}>
                {
                    task.map((item: TaskType, index: number) => {
                        return <Card key={index} time={item.time} status={item.status} title={item.title} content={item.content} name={item.name} />
                    })
                }
            </ScrollView>
        </View>
    );
};

export default Task;
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        paddingTop: 40,
        paddingLeft: 12,
        paddingRight: 12
    },
    status_task: {
        flexDirection: "row",
        backgroundColor: "white",
        position: "relative"
        // justifyContent:"",
        // alignItems:"center"
    },
    input:{
        padding:2,
        borderWidth:1,
        borderRadius:4,
        flex:1,
        margin:12
    },

    status: {
        flexDirection: "row",
        justifyContent: "center",
        // margin:12,
        padding: 4,
        marginTop: 12,
        paddingBottom: 4,
        borderRadius: 8,
        borderWidth: 1,
        marginLeft: 80,
        marginRight: 80,



    },
    status_item: {
        paddingHorizontal: 12,
        paddingTop: 4,
        paddingBottom: 4,



    },
    text: {
        fontSize: 16
    },
    filter: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 12,
        backgroundColor: "white",

    },
    underline: {
        position: "absolute",
        bottom: 0,
        width: Dimensions.get("screen").width / 2,
        height: 2,
        backgroundColor: "#0d6efd"
    },
    active: {

    },
    item_status: {
        flex: 1,
        paddingTop: 12,
        paddingBottom: 12,
        justifyContent: "center",
        flexDirection: "row",

    },

    task_item: {

    },
    task_list: {
        padding: 12,
        paddingTop: 0,
        flex:1
    }
});