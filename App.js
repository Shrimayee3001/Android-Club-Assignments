import * as React from 'react';

import { StyleSheet, Text, View, Button, Easing, RefreshControlComponent, ImageBackground} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPreset,CardStyleInterpolators } from '@react-navigation/stack';
import { useIsFocused } from "@react-navigation/core";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { readJsonConfigFile } from 'typescript';

const Tab = createBottomTabNavigator();
function HomeScreen({ navigation }) {
  navigation.setOptions({
    headerRight: () => (
      <Button
        title="Save"
        onPress={() => {
          //save the changes
          navigation.replace("Home");
        }}
      />
    )
  });
  return (
    <ImageBackground style={{flex: 1}} source={{uri:'https://cdn.wallpapersafari.com/49/91/oXUWTi.jpg'}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Go To Settings Screen" onPress={() => navigation.navigate("Setting")}/>
    </View>

    </ImageBackground>
    
  );
}
function SettingScreen({ navigation }) {
  const isFocused = useIsFocused();
  return (
    <ImageBackground style={{flex: 1}} source={{uri:'https://i.pinimg.com/564x/ec/1f/71/ec1f713f49cc6d6556184969ac9d2efd.jpg'}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
      <Text style={{ color: isFocused ? "white" : "black" }}>SETTINGS SCREEN</Text>
      <Button title="Go To Home Screen" onPress={() => navigation.goBack()} />

    </View>
    </ImageBackground>
  );
}

const FeedScreen = (props) =>(
  <View style={{flex:1, alignItems:'center',justifyContent:'center', backgroundColor: '#2E7E65'}}>
    <Text>FeedScreen</Text>
    <Text>This is feed screen.</Text>
    <Text>  abcde</Text>
    <Text>  abcde</Text>
    <Text>  fghij</Text>
    <Text>  klmno</Text>
    <Text>  pqrst</Text>
    <Text>  uvw</Text>
    <Text>  xyz</Text>
  </View>
);
//background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
const HomeTabNavigator = ()=>(
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen}/>
    <Tab.Screen name="Feed" component={FeedScreen}/>
    <Tab.Screen name="SettingScreen" component={SettingScreen}/>
  </Tab.Navigator>
)
const config ={
  animation: 'spring',
  config:{
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClaming: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const Stack = createStackNavigator();
const closeConfig={
  animation:'timing',
  config:{
    duration: 500,
    easing: Easing.linear
  }
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{gestureEnabled: true,
      gestureDirection: "horizontal",
      cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
      //    transitionSpec:{
      //    open:config,
      //    close:closeConfig
      //  }
    }}
      headerMode="float"
      animation="fade"
      >

        <Stack.Screen  options={{ title: "My Home Screen" }} name="Home" component={HomeTabNavigator} />
        <Stack.Screen name="Setting" component={SettingScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
