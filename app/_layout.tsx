import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { useColorScheme } from '@/components/useColorScheme';
import { Image, Pressable, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false, }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name='search/index' options={{headerShown:false,presentation:'modal'}}/>
        <Stack.Screen name='search/[query]' options={{headerShown:false,presentation:'modal'}}/>
        <Stack.Screen name='video/[videoId]/[channelId]/index' options={{
          headerLeft:()=>{
            return(
              <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center'}}>
                <Pressable onPress={()=>router.back()}>
               <Feather name="arrow-left" size={24} color="black" />
               </Pressable>
              <Image source={require('@/assets/images/homelogo.jpg')} style={{ width:100,height:60}}/>
              </View>
            )
          },
          title:''
        }}/>
      </Stack>
    </ThemeProvider>
  );
}
