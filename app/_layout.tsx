import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useRouter, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../src/assets/fonts/SpaceMono-Regular.ttf'),
  });

  const isLogin = false; // Simulating login state, change based on auth logic

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();

      // Redirect to login if not logged in
      if (!isLogin) {
        router.replace('/login'); // Replace to avoid back navigation to unauthorized page
      }
    }
  }, [loaded, isLogin]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="(tabs)">
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen options={{ title: "Các bài đăng" }} name="post-user" />
        <Stack.Screen options={{ title: "Tin đến" }} name="mail" />
        <Stack.Screen options={{ title: "Thêm đối tượng giám sát" }} name="add-monitor" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
