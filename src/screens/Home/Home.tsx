
import { BarChart } from 'react-native-gifted-charts';


import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import { router } from 'expo-router';

const App = () => {
    const barData = [
        { value: 250, label: 'M' },
        { value: 500, label: 'T', frontColor: '#2196F3' },
        { value: 745, label: 'W', frontColor: '#2196F3' },
        { value: 320, label: 'T' },
        { value: 600, label: 'F', frontColor: '#2196F3' },
        { value: 256, label: 'S' },
        { value: 300, label: 'S' },
    ];
    return (
        <View style={styles.container}>

            <Pressable onPress={()=>router.navigate("/login")}>
                <Text style={styles.header}>Hệ thống MTTN</Text>
            </Pressable>


            <ScrollView>
                <View style={styles.gridContainer}>
                    <GridItem number="5" label="Nhiệm vụ" />
                    <GridItem number="54" label="Hòm thư" />
                    <GridItem number="22" label="Đối tượng" />
                    <GridItem number="0" label="Trang truyền thông" />
                </View>


                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Nhiệm vụ hàng ngày</Text>
                    <View style={styles.taskStats}>
                        <TaskStat label="Đã báo cáo" value="2/5" />
                        <TaskStat label="Đang thực hiện" value="3" />
                        <TaskStat label="Chưa đọc" value="0" />
                    </View>
                </View>


                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Hòm thư</Text>
                    <View style={styles.mailBox}>
                        <Text style={styles.mailHeader}>TIN NHẮN MỚI</Text>
                        <Text style={styles.mailText} numberOfLines={1} >
                            Kính gửi BCDĐ35 TP Đà Nẵng TÌNH HÌNH ANCT-TTAT...{'\n'}
                        </Text>
                        <Text style={styles.mailTime}>Thời gian: 6/2/2024</Text>
                        <TouchableOpacity>
                            <Text style={styles.detailsButton}>Chi tiết</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Hoạt động của các đối tượng</Text>
                    <Text style={styles.activityDescription}>
                        Đây là biểu đồ biểu diễn số liệu về các đối tượng truyền thông. Dữ liệu cụ thể sẽ hiển thị bên dưới.
                    </Text>
                    <BarChart
                        barWidth={24}
                        noOfSections={3}
                        barBorderRadius={2}
                        frontColor="lightgray"
                        data={barData}
                        yAxisThickness={0}
                        xAxisThickness={0}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const GridItem = ({ number, label }: any) => (
    <View style={styles.gridItem}>
        <Text style={styles.gridNumber}>{number}</Text>
        <Text style={styles.gridLabel}>{label}</Text>
    </View>
);

const TaskStat = ({ label, value }: any) => (
    <View style={styles.statBox}>
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statLabel}>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',

        marginVertical: 24,
        paddingTop: 12,
        paddingLeft: 12
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        // padding: 10,
    },
    gridItem: {
        width: '45%',
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
    },
    gridNumber: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
    },
    gridLabel: {
        fontSize: 16,
        marginTop: 5,
        color: '#777',
    },
    section: {
        backgroundColor: '#fff',
        marginVertical: 10,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        margin: 12
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    taskStats: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    statBox: {
        alignItems: 'center',
        padding: 10,
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 14,
        color: '#555',
    },
    mailBox: {
        backgroundColor: '#e9f5e9',
        padding: 15,
        borderRadius: 10,
    },
    mailHeader: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    mailText: {
        fontSize: 14,
        marginVertical: 10,
        color: '#333',
    },
    mailTime: {
        fontSize: 12,
        color: '#777',
    },
    detailsButton: {
        marginTop: 5,
        fontSize: 14,
        color: '#007bff',
        fontWeight: 'bold',
    },
    activityDescription: {
        fontSize: 14,
        color: '#555',
    },
    chart: {
        marginVertical: 8,
        borderRadius: 10,
    },
});

export default App;
