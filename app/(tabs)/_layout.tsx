import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { HapticTab } from '@components/HapticTab';
import { IconSymbol } from '@components/ui/IconSymbol';
import TabBarBackground from '@components/ui/TabBarBackground';
import { Colors } from '@constants/Colors';
import { useColorScheme } from '@hooks/useColorScheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"

        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,

          headerTitle: 'Hệ thống MTTN'
        }}

      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Nhiệm vụ',
          tabBarIcon: ({ color }) => <MaterialIcons name="task-alt" size={24} color={color} />,

          headerTitle: 'Nhiệm vụ'
        }}
      />
      <Tabs.Screen
        name="monitor"
        options={{
          title: 'Giám sát',
          tabBarIcon: ({ color }) => <MaterialIcons name="monitor" size={24} color={color} />,

          headerTitle: 'Giám sát'
        }}
      />
      <Tabs.Screen
        name="mailbox"
        options={{
          title: 'Hòm thư',
          tabBarIcon: ({ color }) =><MaterialIcons name="mail" size={24} color={color} />,

          headerTitle: ''
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: 'Tin nhắn',
          tabBarIcon: ({ color }) =><AntDesign name="message1" size={24} color={color} />,

          headerTitle: ''
        }}
      />
    </Tabs>
  );
}
