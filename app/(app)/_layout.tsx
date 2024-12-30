import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Page";
import ExploreScreen from "./explore";
import React from "react";
import { StyleSheet, View } from "react-native";
import Home from ".";

export default function AppLayout() {
  const Stack = createStackNavigator();
  return (
    <ThemeProvider value={DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              headerTitle: () => null,
            }}
            component={Home}
          />
          <Stack.Screen
            name="Page"
            options={{
              headerTitle: () => null,
              title: "Page",
            }}
            component={HomeScreen}
          />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: 40,
    height: 40,
    backgroundColor: "#0553",
    borderRadius: 40, // Half of the width and height
  },
});
