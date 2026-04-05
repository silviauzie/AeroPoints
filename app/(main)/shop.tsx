import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function shop() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 12,
          fontWeight: "400",
          lineHeight: 20,
          textAlign: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        Hii.. just a friendly reminder that you are in an unfamilar territory,
        that is why you are confused
      </Text>
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
