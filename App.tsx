import 'react-native-gesture-handler';
/*import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';*/

import Routes from './scr/Navigations/Routes';
import React from 'react';
import { Platform, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'android' ? 30 : 0
        }}
      >
        {
          /* <StatusBar style="dark" />
           
           */
          <Routes/>
        }
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
