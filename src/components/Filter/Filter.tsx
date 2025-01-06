import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
type TypeTab = {
    tabs?:string[]
}
const CustomTabs = (props:TypeTab) => {
  const [selectedTab, setSelectedTab] = useState(0); 
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {props?.tabs?.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabButton,
              selectedTab === index && styles.activeTabButton, 
            ]}
            onPress={() => setSelectedTab(index)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === index && styles.activeTabText, 
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    justifyContent: 'center',
    paddingLeft:32,
    paddingRight:32,
    paddingTop:12,
    backgroundColor: '#f5f5f5',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    backgroundColor: 'white',
  },
  activeTabButton: {
    borderColor: '#2196F3', 
   // backgroundColor: '#F6FFF0', 
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  activeTabText: {
    color: '#2196F3',
  },
  contentContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  contentText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CustomTabs;
