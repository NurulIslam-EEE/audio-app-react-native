import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import store from "./store";
import { Provider } from "react-redux"; 
import FlashMessage from "react-native-flash-message";
import { useFonts } from 'expo-font';

export default function App() {

  let[fontsLoaded]=useFonts({
    'Manrope-Bold':require('./assets/fonts/Manrope-Bold.ttf'),
    'Manrope-Medium':require('./assets/fonts/Manrope-Medium.ttf'),
    'Manrope-Regular':require('./assets/fonts/Manrope-Regular.ttf'),
   
  })
  if(!fontsLoaded){
    return null
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />

        <StatusBar/>
        <FlashMessage

        position='top'
        floating
        statusBarHeight={30}

        />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
