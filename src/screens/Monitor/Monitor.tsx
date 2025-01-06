import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, Dimensions, Animated, ScrollView, Modal, RefreshControl, TouchableOpacity } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MonitorItem from './subcomponents/MonitorItem';
import OnlineItem from './subcomponents/OnlineItem';
import { Tab, TabView } from '@rneui/themed';
import CustomInput from '@components/InputCustom/InputCustom';
import CustomTabs from '@components/Filter/Filter';
import { router } from 'expo-router';
type MonitorType = {
    userName: string,
    time: string,
    uuid: string
}
type PostType = {
    userName: string,
    time: string,
    content: string,
    like: string,
    comment: string,
    share: string,
    avatar: string
}
const Monitor = () => {
    const [underlinePosition] = useState(new Animated.Value(0));
    const [listMonitor, setListMonitor] = useState<MonitorType[]>([
        {
            time: "27/11/2022",
            userName: "Trần Tùng",
            uuid: "033201000183"
        },
        {
            time: "27/11/2022",
            userName: "Đào Hà",
            uuid: "033201000183"
        },
        {
            time: "27/11/2022",
            userName: "Trần Trung",
            uuid: "033201000183"
        },
        {
            time: "27/11/2022",
            userName: "Quốc Bảo",
            uuid: "033201000183"
        },
        {
            time: "27/11/2022",
            userName: "Quốc Bảo",
            uuid: "033201000183"
        },
    ])
    const [listPost, setListPost] = useState<PostType[]>([
        {
            time: "27/11/2022",
            userName: "Trần Tùng",
            comment: "1",
            like: "12",
            share: "1",
            content: "Ảnh đẹp tuyệt vời của báo đốm! 🐆❤️ Bức ảnh hiếm hoi về một con báo đốm trong lòng sâu của dòng sông Amazon được chụp bởi nhiếp ảnh gia Herbert Van Der Beek. Với vẻ đẹp mạnh mẽ và đầy huyền bí, báo đốm là một trong những loài động vật hoang dã khó bắt gặp trong tự nhiên, đặc biệt là trong môi trường sống nguyên sơ như rừng Amazon.",
            avatar: "TT"
        },
        {
            time: "27/12/2022",
            userName: "Đào Hà",
            comment: "1",
            like: "12",
            share: "1",
            content: "Ảnh đẹp tuyệt vời của báo đốm! 🐆❤️ Bức ảnh hiếm hoi về một con báo đốm trong lòng sâu của dòng sông Amazon được chụp bởi nhiếp ảnh gia Herbert Van Der Beek. Với vẻ đẹp mạnh mẽ và đầy huyền bí, báo đốm là một trong những loài động vật hoang dã khó bắt gặp trong tự nhiên, đặc biệt là trong môi trường sống nguyên sơ như rừng Amazon.",
            avatar: "VH"
        },
        {
            time: "27/11/2022",
            userName: "Trần Trung",
            comment: "1",
            like: "12",
            share: "1",
            content: "Ảnh đẹp tuyệt vời của báo đốm! 🐆❤️ Bức ảnh hiếm hoi về một con báo đốm trong lòng sâu của dòng sông Amazon được chụp bởi nhiếp ảnh gia Herbert Van Der Beek. Với vẻ đẹp mạnh mẽ và đầy huyền bí, báo đốm là một trong những loài động vật hoang dã khó bắt gặp trong tự nhiên, đặc biệt là trong môi trường sống nguyên sơ như rừng Amazon.",
            avatar: "T"
        },
        {
            time: "27/11/2022",
            userName: "Quốc Bảo",
            comment: "1",
            like: "12",
            share: "1",
            content: "Ảnh đẹp tuyệt vời của báo đốm! 🐆❤️ Bức ảnh hiếm hoi về một con báo đốm trong lòng sâu của dòng sông Amazon được chụp bởi nhiếp ảnh gia Herbert Van Der Beek. Với vẻ đẹp mạnh mẽ và đầy huyền bí, báo đốm là một trong những loài động vật hoang dã khó bắt gặp trong tự nhiên, đặc biệt là trong môi trường sống nguyên sơ như rừng Amazon.",
            avatar: "QB"
        },
        {
            time: "27/11/2022",
            userName: "Quốc Bảo",
            comment: "1",
            like: "12",
            share: "1",
            content: "Ảnh đẹp tuyệt vời của báo đốm! 🐆❤️ Bức ảnh hiếm hoi về một con báo đốm trong lòng sâu của dòng sông Amazon được chụp bởi nhiếp ảnh gia Herbert Van Der Beek. Với vẻ đẹp mạnh mẽ và đầy huyền bí, báo đốm là một trong những loài động vật hoang dã khó bắt gặp trong tự nhiên, đặc biệt là trong môi trường sống nguyên sơ như rừng Amazon.",
            avatar: "QB"
        },
    ])
    const [active, setActive] = useState(0)
    const [modalVisible, setModalVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false); // Trạng thái loading
    const onRefresh = () => {
        setRefreshing(true); // Hiển thị loading spinner
        setTimeout(() => {
            setRefreshing(false); // Tắt loading sau 2 giây (giả lập tải xong dữ liệu)
            alert('Dữ liệu đã được làm mới!');
        }, 2000);
    };
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <View style={{ flex: 1 }}>



            <Modal
                transparent={true}  // Makes the background overlay transparent
                animationType="slide"  // Fade-in/out animation
                visible={modalVisible} // Controls visibility
                onRequestClose={closeModal} // Handle back button on Android
            >
                {/* The overlay */}
                <View style={styles.overlay}>
                    {/* Modal content */}

                    <View style={styles.modalContent}>
                        <View style={styles.header_modal}>
                            <Pressable style={styles.icon_modal}>
                            <AntDesign name="close" size={18} color="black" />
                            </Pressable>
                            <Text style={styles.header_text}>Bộ lọc</Text>
                        </View>
                        <View style={styles.form_modal}>
                            <View style={styles.form_input}>
                                <Text style={styles.text_filter}>Theo tên</Text>
                                <TextInput style={styles.input} placeholder='Nhập tên đói tượng' />

                            </View>
                            <View style={styles.form_input}>
                                <Text style={styles.text_filter}>Theo dạng trang</Text>
                                <TextInput style={styles.input} placeholder='Nhập tên đói tượng' />

                            </View>
                        </View>
                        <View style={styles.footer_modal}>
                            <TouchableOpacity style={styles.reset_bottom} onPress={closeModal}>
                                <Text style={{ fontSize: 16, flex: 1 }}>Thiết lập lại</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                                <Text style={styles.buttonText}>Áp dụng</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>

            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: "600" }}>Giám sát</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => router.navigate("/add-monitor")}>
                        <AntDesign name="plus" size={28} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <AntDesign name="filter" size={28} color="black" />
                    </TouchableOpacity>
                    <View style={{ marginLeft: 4 }}><Feather name="settings" size={24} color="black" /></View>
                </View>
            </View>

            <Tab style={{ backgroundColor: "white" }} indicatorStyle={{ backgroundColor: "#0d6efd" }} value={active} onChange={(e) => {

                setActive(e)
            }} dense >
                <Tab.Item >Đối tượng giám sát</Tab.Item>
                <Tab.Item>Kênh truyền thông</Tab.Item>
            </Tab>
            <CustomTabs tabs={['Danh sách', 'Hoạt động']} />
            <TabView value={active} onChange={setActive} animationType="spring">
                <TabView.Item style={styles.monitor_item}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}  // Ẩn thanh cuộn dọc
                        showsHorizontalScrollIndicator={false}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing} // Trạng thái của spinner
                                onRefresh={onRefresh} // Hàm chạy khi refresh
                                colors={['#2196F3']} // Màu loading (trên Android)
                                tintColor="#2196F3" // Màu loading (trên iOS)
                                title="Đang tải dữ liệu..." // Tiêu đề trong lúc loading (iOS)
                            />
                        }
                    >
                        {listMonitor.map((item: MonitorType) => (<MonitorItem uuid={item.uuid} userName={item.userName} time={item.time} />))}
                    </ScrollView>
                </TabView.Item>
                <TabView.Item >
                    <ScrollView
                        showsVerticalScrollIndicator={false}  // Ẩn thanh cuộn dọc
                        showsHorizontalScrollIndicator={false}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing} // Trạng thái của spinner
                                onRefresh={onRefresh} // Hàm chạy khi refresh
                                colors={['#2196F3']} // Màu loading (trên Android)
                                tintColor="#2196F3" // Màu loading (trên iOS)
                                title="Đang tải dữ liệu..." // Tiêu đề trong lúc loading (iOS)
                            />
                        }
                    >

                        {listPost.map((item: PostType, index: number) => (<OnlineItem share={item.share} time={item.time} like={item.like} userName={item.userName} avatar={item.avatar} comment={item.comment} content={item.content} />))}
                    </ScrollView>
                </TabView.Item>

            </TabView>

        </View>
    );
};

export default Monitor;
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


        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "space-between"
    },
    header_modal: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position:"relative",
        width:"100%",
        borderBottomWidth: 0.5,
        borderBottomColor: "#17171726",
    },
    icon_modal:{
        position:"absolute",
        top:16,
        left:12
    },

    form_modal: {
       
        flex: 1,
        padding: 12
    },
    footer_modal: {
        flexDirection: "row",
        padding: 12
    },
    header_text: {
        fontSize: 16,
        fontWeight: "600",

        padding: 12
    },
    text_filter: {
        paddingBottom: 6,
        color: "#17171778"
    },

    modalText: {
        fontSize: 18,
        marginBottom: 20,
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
        padding: 14,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "gray",

    },
    form_input: {
        paddingTop: 12,
        justifyContent: "flex-start",
        width: "100%",

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