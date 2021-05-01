import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Squares from "./squares";

export default function App() {
  return (
    <View style={styles.container}>
      <Squares vale={"#000"} />
      <Squares vale={"#1a3668"} />
      <Squares vale={"green"} />
      <StatusBar style="auto" />
    </View>
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
