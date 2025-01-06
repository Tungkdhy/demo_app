import React from 'react';
import { StyleSheet, TextInput, View, Text, Button, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Trang cá nhân', value: '1' },
    { label: 'Nhóm mở', value: '2' },
    { label: 'Fan page', value: '3' },
  
  ];
const AddMonitor = () => {
    const [value, setValue] = React.useState<string|null>(null);
    const [isFocus, setIsFocus] = React.useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.form_input}>
                <TextInput style={styles.input} placeholder='Tên đối tượng giám sát' />
                <Text style={styles.limit}>0/200</Text>
            </View>
            <View style={styles.form_input}>
                <TextInput style={styles.input} placeholder='UUID của đối tượng giám sát ' />

            </View>
            <View style={styles.form_input}>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Lựa chọn' : '...'}
                    searchPlaceholder="Tìm kiếm..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                   
                />

            </View>
            <View style={styles.form_btn}>

                <TouchableOpacity style={styles.button} onPress={() => alert('Pressed!')}>
                    <Text style={styles.buttonText}>Thêm mới</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddMonitor;
const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: "white",
        flex: 1,
        paddingTop: 24
    },
    form_input: {
        paddingBottom: 12
    },
    input: {
        padding: 14,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "gray"
    },
    limit: {
        textAlign: "right",
        fontSize: 12,
        paddingTop: 4
    },
    form_btn: {
        paddingTop: 12
    },
    button: {
        // Custom width
        height: 42,  // Custom height
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    dropdown: {
        marginTop:12,
        height: 48,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
})