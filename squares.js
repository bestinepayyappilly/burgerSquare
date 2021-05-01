import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Squares = (props) => {
  const { vale } = props;
  return (
    <View style={{ padding: 10 }}>
      <View style={{ height: 100, width: 100, backgroundColor: vale }}></View>
    </View>
  );
};

export default Squares;

const styles = StyleSheet.create({});
