import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function ExploreScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
