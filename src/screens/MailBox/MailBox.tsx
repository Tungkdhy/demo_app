import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Pressable } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tab, TabView } from '@rneui/themed';
import Card from '@components/Card/Card';
import { router } from 'expo-router';
type MailBoxType = {
    name: string,
    status: "Báo xấu" | "Khác" | "Giám sát" | "other",
    title: string,
    content: string,
    time: string

}
const MailBox = () => {
    const [active, setActive] = useState(0)
    const [mailBox, setMailBox] = useState<MailBoxType[]>([
        {
            time: "2023",
            status: "other",
            title: "Báo xấu mục tiêu Nguyễn Thành Lương",
            content: "Đề nghị các đc tham gia kiểm thử tích cực tương tác",
            name: "TRỰC BAN TCKGM"
        },
        {
            time: "2023",
            status: "other",
            title: "Báo xấu mục tiêu Nguyễn Thành Lương",
            content: "Đề nghị các đc tham gia kiểm thử tích cực tương tác",
            name: "BCD 35"
        },
        {
            time: "2023",
            status: "other",
            title: "Báo xấu mục tiêu Nguyễn Thành Lương",
            content: "Đề nghị các đc tham gia kiểm thử tích cực tương tác",
            name: "BCD 35"
        }
    ])
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: "600" }}>Hòm thư</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ marginLeft: 4 }}><Feather name="settings" size={24} color="black" /></View>
                </View>
            </View>

            <Tab style={{ backgroundColor: "white" }} indicatorStyle={{ backgroundColor: "#0d6efd" }} value={active} onChange={(e) => {

                setActive(e)
            }} dense >
                <Tab.Item >Tin đến</Tab.Item>
                <Tab.Item>Tin đi</Tab.Item>
            </Tab>
            <TabView value={active} onChange={setActive} animationType="spring">
                <TabView.Item style={styles.monitor_item}>
                    <ScrollView>
                        {
                            mailBox.map((item: MailBoxType, index: number) => {
                                return <Pressable onPress={()=>router.navigate("/mail")} key={index}><Card time={item.time} status={item.status} title={item.title} content={item.content} name={item.name} /></Pressable>
                            })
                        }
                    </ScrollView>
                </TabView.Item>
                <TabView.Item style={styles.monitor_item}>
                    <ScrollView>
                        {
                            mailBox.map((item: MailBoxType, index: number) => {
                                return <Card time={item.time} status={item.status} title={item.title} content={item.content} name={item.name} />
                            })
                        }
                    </ScrollView>
                </TabView.Item>

            </TabView>
        </View>
    );
};

export default MailBox;
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
    container: {
        flex: 1,
        justifyContent: 'center',

        backgroundColor: '#fff',
    },
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black background
    },
    modalContent: {
        width: "100%",
        height: "80%",
        padding: 12,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "space-between"
    },
    footer_modal: {
        flexDirection: "row"
    },
    header_text: {
        fontSize: 16,
        fontWeight: "600"
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    header_modal: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    closeButton: {
        backgroundColor: '#2196F3',
        padding: 12,
        borderRadius: 4,
        alignItems: "center",
        flex: 1,
        marginLeft: 6
    },
    reset_bottom: {
        padding: 12,
        borderRadius: 4,
        borderWidth: 1,
        alignItems: "center",
        marginRight: 6,
        // justifyContent:"center",
        flex: 1,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    input: {
        padding: 2,
        borderWidth: 1,
        borderRadius: 4,
        flex: 1,
        margin: 12
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
    monitor_item: {
        padding: 12,
        paddingTop: 0,
        flex: 1
    }
});